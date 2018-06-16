# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_16_193706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.bigint "job_id"
    t.bigint "job_seeker_id"
    t.boolean "accepted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_id"], name: "index_applications_on_job_id"
    t.index ["job_seeker_id"], name: "index_applications_on_job_seeker_id"
  end

  create_table "job_owners", force: :cascade do |t|
    t.string "organization", default: "", null: false
    t.string "contact_first_name", default: "", null: false
    t.string "contact_last_name", default: "", null: false
    t.string "contact_email"
    t.string "contact_role"
    t.string "string", default: "", null: false
    t.string "contact_number", default: "", null: false
    t.float "star_rating"
    t.text "about"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_job_owners_on_user_id"
  end

  create_table "job_seekers", force: :cascade do |t|
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "contact_phone"
    t.string "post_code"
    t.string "address_line1"
    t.string "address_line2"
    t.float "star_rating"
    t.text "about"
    t.boolean "driving_license"
    t.float "half_day_rate"
    t.float "full_day_rate"
    t.float "hourly_rate"
    t.string "user_type", default: "tradesman"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_job_seekers_on_user_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.string "timestamps"
    t.string "status", default: "open"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "job_owner_id"
    t.bigint "location_id"
    t.index ["job_owner_id"], name: "index_jobs_on_job_owner_id"
    t.index ["location_id"], name: "index_jobs_on_location_id"
  end

  create_table "locations", force: :cascade do |t|
    t.bigint "job_owner_id"
    t.string "name"
    t.string "address_line1"
    t.string "address_line2"
    t.string "post_code"
    t.string "county"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_owner_id"], name: "index_locations_on_job_owner_id"
  end

  create_table "ratings", force: :cascade do |t|
    t.bigint "job_seeker_id"
    t.bigint "job_owner_id"
    t.string "author", default: "", null: false
    t.float "star_rating", default: 3.0, null: false
    t.text "review", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["job_owner_id"], name: "index_ratings_on_job_owner_id"
    t.index ["job_seeker_id"], name: "index_ratings_on_job_seeker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.boolean "allow_password_change", default: false
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "image"
    t.json "tokens"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

end
