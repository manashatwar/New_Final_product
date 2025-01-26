module betting::betting_db {
    use std::string::String;
    use std::vector;
    use aptos_std::table::{Self, Table};
    use std::option::{Self, Option};

    friend betting::betting;

    struct GameData has store, drop, copy {
        player1_name: String,
        player1_address: address,
        player2_name: String,
        player2_address: address,
        total_staked_amount: u64,
        winner_address: Option<address>,
        transaction_hashes: vector<String>
    }

    struct BettingStore has key {
        game_data_table: Table<String, GameData>
    }

    public fun get_game_data(game_room_code: String): Option<GameData> acquires BettingStore {
        let store = borrow_global<BettingStore>(@betting);
        if (table::contains(&store.game_data_table, copy game_room_code)) {
            option::some(*table::borrow(&store.game_data_table, game_room_code))
        } else {
            option::none()
        }
    }

    public fun get_winner_address(game_data: &GameData): &Option<address> {
        &game_data.winner_address
    }

    public fun get_total_staked_amount(game_data: &GameData): u64 {
        game_data.total_staked_amount
    }

    public fun update_winner(
        _account: &signer,
        game_room_code: String,
        winner_address: address
    ) acquires BettingStore {
        let store = borrow_global_mut<BettingStore>(@betting);
        let game_data = table::borrow_mut(&mut store.game_data_table, game_room_code);
        game_data.winner_address = option::some(winner_address);
    }

    #[test_only]
    public fun initialize_for_test(account: &signer) {
        move_to(account, BettingStore {
            game_data_table: table::new()
        });
    }
}