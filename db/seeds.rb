# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all 
Listing.destroy_all
Sneaker.destroy_all 

demo = User.create(email: "heracross1@gmail.com", password: "pikachu")
chicago1 = Sneaker.create(name: "Jordan 1", description: "chicago 1", release_date: "06/05/1993", sku: "test1", brand: "Jordan Brand", colorway: "Chicago", silhouette: "High Top", category: "IONO" )
clay_greens = Sneaker.create(name: "Jordan 12", description: "best hand", release_date: "06/05/1993", sku: "test2", brand: "Jordan Brand", colorway: "Clay Green", silhouette: "High Top", category: "IONO" )
listing1 = Listing.create(sneaker_id: 1, size: 8.5, price: 160 )
listing2 = Listing.create(sneaker_id: 1, size: 9.5, price: 200)
