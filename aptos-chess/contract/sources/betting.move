module betting::betting {
    use std::option;
    use std::string::String;
    use aptos_framework::account;
    use aptos_framework::event::{Self, EventHandle};
    use aptos_framework::timestamp;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use betting::betting_db;
    use std::signer;

    // Error constants
    const ENOT_ENOUGH_BALANCE: u64 = 1;
    const EGAMEROOM_FULL: u64 = 2;
    const EINVALID_WINNER: u64 = 3;
    const EGAMEROOM_NOT_EXIST: u64 = 4;
    const ENOT_OWNER: u64 = 5;
    const ENO_COMMISSION: u64 = 6;

    // Commission rates
    const WINNER_SHARE: u64 = 70; // 70%
    const OWNER_COMMISSION: u64 = 30; // 30%

    struct BetEvent has drop, store {
        game_room_code: String,
        player_address: address,
        bet_amount: u64,
        timestamp: u64,
    }

    struct WithdrawEvent has drop, store {
        game_room_code: String,
        winner_address: address,
        amount: u64,
        timestamp: u64,
    }

    struct BettingStore has key {
        bet_events: EventHandle<BetEvent>,
        withdraw_events: EventHandle<WithdrawEvent>,
        owner: address,
        commission_balance: u64
    }

    fun init(account: &signer) {
        let owner_addr = signer::address_of(account);
        if (!exists<BettingStore>(owner_addr)) {
            move_to(account, BettingStore {
                bet_events: account::new_event_handle<BetEvent>(account),
                withdraw_events: account::new_event_handle<WithdrawEvent>(account),
                owner: owner_addr,
                commission_balance: 0
            });
        };
    }

    public fun withdraw(
        sender: &signer,
        game_room_code: String,
        winner_address: address,
    ) acquires BettingStore {
        let betting_store = borrow_global_mut<BettingStore>(@aptos_framework);
        let current_timestamp = timestamp::now_seconds();
        let game_data_option = betting_db::get_game_data(game_room_code);
        
        assert!(option::is_some(&game_data_option), EGAMEROOM_NOT_EXIST);
        let game_data = option::extract(&mut game_data_option);
        assert!(option::is_none<address>(betting_db::get_winner_address(&game_data)), EINVALID_WINNER);
        
        let total_amount = betting_db::get_total_staked_amount(&game_data);
        let winner_amount = (total_amount * WINNER_SHARE) / 100;
        let commission = (total_amount * OWNER_COMMISSION) / 100;
        
        betting_store.commission_balance = betting_store.commission_balance + commission;
        
        coin::transfer<AptosCoin>(sender, winner_address, winner_amount);
        betting_db::update_winner(sender, game_room_code, winner_address);
        
        event::emit_event(
            &mut betting_store.withdraw_events,
            WithdrawEvent {
                game_room_code,
                winner_address,
                amount: winner_amount,
                timestamp: current_timestamp,
            },
        );
    }

    public fun withdraw_commission(sender: &signer) acquires BettingStore {
        let betting_store = borrow_global_mut<BettingStore>(@aptos_framework);
        assert!(signer::address_of(sender) == betting_store.owner, ENOT_OWNER);
        assert!(betting_store.commission_balance > 0, ENO_COMMISSION);

        let commission = betting_store.commission_balance;
        betting_store.commission_balance = 0;
        coin::transfer<AptosCoin>(sender, betting_store.owner, commission);
    }

    #[test_only]
    public fun create_test_store(account: &signer) {
        init(account)
    }
}