# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_11_16_010548) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "map"
    t.string "char_type"
    t.integer "health_level"
    t.integer "health_max"
    t.integer "damage"
    t.integer "defense"
    t.integer "points"
    t.integer "x"
    t.integer "y"
    t.boolean "defeated"
    t.boolean "patrol"
    t.bigint "saved_game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["saved_game_id"], name: "index_characters_on_saved_game_id"
  end

  create_table "game_objects", force: :cascade do |t|
    t.string "map"
    t.string "object_type"
    t.integer "x"
    t.integer "y"
    t.boolean "collected"
    t.bigint "saved_game_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["saved_game_id"], name: "index_game_objects_on_saved_game_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "health_pack"
    t.string "weapon"
    t.integer "weapon_strength"
    t.integer "weapon_max"
    t.integer "item_1"
    t.integer "item_2"
    t.integer "item_3"
    t.integer "item_4"
    t.integer "item_5"
    t.integer "item_6"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "saved_games", force: :cascade do |t|
    t.string "name"
    t.string "map"
    t.integer "health_level"
    t.integer "health_max"
    t.integer "armor_level"
    t.integer "armor_max"
    t.integer "score"
    t.integer "coins"
    t.integer "xP"
    t.integer "yP"
    t.integer "xM"
    t.integer "yM"
    t.bigint "user_id", null: false
    t.bigint "inventory_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["inventory_id"], name: "index_saved_games_on_inventory_id"
    t.index ["user_id"], name: "index_saved_games_on_user_id"
  end

  create_table "settings", force: :cascade do |t|
    t.string "up_key"
    t.integer "up_keyCode"
    t.string "down_key"
    t.integer "down_keyCode"
    t.string "left_key"
    t.integer "left_keyCode"
    t.string "right_key"
    t.integer "right_keyCode"
    t.string "attack_key"
    t.integer "attack_keyCode"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_settings_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "characters", "saved_games"
  add_foreign_key "game_objects", "saved_games"
  add_foreign_key "saved_games", "inventories"
  add_foreign_key "saved_games", "users"
  add_foreign_key "settings", "users"
end
