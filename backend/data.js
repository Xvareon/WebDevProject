import bcrypt from 'bcryptjs';

const data = {
   users: [
      {
         name: 'mabuX',
         email: 'admin@example.com',
         password: bcrypt.hashSync('1234', 8),
         isAdmin: true,
      },
      {
         //customer
         name: 'John',
         email: 'user@example.com',
         password: bcrypt.hashSync('1234', 8),
         isAdmin: false,
      },
   ],
   products: [
      {
         name: "Tyrannosaurus Rex Genes",
         category: "dinosaur",
         image: "/images/Image0.jpg",
         price: 150,
         countInStock: 10,
         brand: "ResCorp",
         rating: 5.0,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Pterosaurus Genes",
         category: "dinosaur",
         image: "/images/Image1.jpg",
         price: 110,
         countInStock: 8,
         brand: "ResCorp",
         rating: 3.5,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Triceratops Genes",
         category: "dinosaur",
         image: "/images/Image2.jpg",
         price: 130,
         countInStock: 12,
         brand: "ResCorp",
         rating: 4.5,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Brachiosaurus Genes",
         category: "dinosaur",
         image: "/images/Image3.jpg",
         price: 140,
         countInStock: 0,
         brand: "ResCorp",
         rating: 4.0,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Stegosaurus Genes",
         category: "dinosaur",
         image: "/images/Image4.jpg",
         price: 120,
         countInStock: 1,
         brand: "ResCorp",
         rating: 3.0,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Mosasaurus Genes",
         category: "dinosaur",
         image: "/images/Image5.jpg",
         price: 160,
         countInStock: 2,
         brand: "ResCorp",
         rating: 4.5,
         numReview: 10,
         description: "Limited Product"
      },
      {
         name: "Velociraptor Genes",
         category: "dinosaur",
         image: "/images/Image6.jpg",
         price: 100,
         countInStock: 1,
         brand: "ResCorp",
         rating: 5.0,
         numReview: 10,
         description: "Limited Product"
      },
   ]
}
export default data;