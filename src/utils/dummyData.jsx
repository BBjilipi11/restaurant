import { FiShoppingBag } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";
import { LuBox } from "react-icons/lu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Burger from "../assets/burger.png";
import Pizza from "../assets/pizza.png";
import FrenchFries from "../assets/french-fry.png";
import Chicken from "../assets/fried-shrimp.png";
import thumbnail from "../assets/thumbnailCustomer.png";
import thumbnailTwo from "../assets/thumbnail-two.webp";
import thumbnailThree from "../assets/thumbnail-three.jpg";
import profile from "../assets/customter.png";
import profileTwo from "../assets/profile-two.jpg";
import profileThree from "../assets/profile-three.jpg";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Clients",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
];

const buttonNames = [
  {
    id: 1,
    name: "About",
    title: "Authentic Indian flavors in the heart of Kolkata",
    description:
      "Welcome to our restaurant, where tradition meets taste. We bring you a fine selection of regional Indian dishes prepared with fresh ingredients and rich spices. From classic Bengali delicacies to North and South Indian specialties, every meal is crafted to give you a true taste of India right here in Kolkata.",
    button: "Learn More",
    contact: "+91 98300 12345",
  },
  {
    id: 2,
    name: "Experience",
    title: "A memorable dining journey with Indian hospitality",
    description:
      "Step into a warm and inviting atmosphere, designed to reflect the cultural richness of India. Whether it’s a family dinner, festive celebration, or a casual evening with friends, our restaurant promises a delightful experience filled with flavorful dishes and heartfelt service. Each visit is more than a meal – it’s a celebration of Indian tradition.",
    button: "Explore More",
    contact: "+91 98300 12345",
  },
  {
    id: 3,
    name: "Contact",
    title: "We’re here to serve you – get in touch today",
    description:
      "Have a query or want to book a table? Reach out to us and our team will be happy to assist you. Whether you’re planning a large gathering or an intimate dinner, we’ll ensure everything is taken care of with warmth and care. Call us or visit us in Kolkata for an unforgettable dining experience.",
    button: "Contact Us",
    contact: "+91 98300 12345",
  },
];

const aboutItems = [
  {
    id: 1,
  image: <LuBox className="text-blue-600 text-[35px]" />,
    title: "Fast Delivery",
    description: "Within 30 minutes",
  },
  {
    id: 2,
  image: <SlBadge className="text-blue-600 text-[35px]" />,
    title: "Absolute Dining",
    description: "Best buffet restaurant",
  },
  {
    id: 3,
  image: <FiShoppingBag className="text-blue-600 text-[35px]" />,
    title: "Pickup Delivery",
    description: "Grab your food order",
  },
];

const popularItemData = [
  {
    id: 1,
    title: "Special Burger",
    description: "Barbecue chicken burger",
    image: Burger,
  },
  {
    id: 2,
    title: "Special Pizza",
    description: "Barbecue chicken pizza",
    image: Pizza,
  },
  {
    id: 3,
    title: "Special French fries ",
    description: "Barbecue deep-fried cuisine",
    image: FrenchFries,
  },
  {
    id: 4,
    title: "Cuisine Chicken",
    description: "Japanese Cuisine Chicken",
    image: Chicken,
  },
  {
    id: 5,
    title: "Special Pizza",
    description: "Barbecue chicken pizza",
    image: Pizza,
  },
  {
    id: 6,
    title: "Special French fries ",
    description: "Barbecue deep-fried cuisine",
    image: FrenchFries,
  },
  {
    id: 7,
    title: "Cuisine Chicken",
    description: "Japanese Cuisine Chicken",
    image: Chicken,
  },
];

const socialIcons = [
  {
    icon: IoLogoFacebook,
  },
  {
    icon: FaXTwitter,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: FaLinkedin,
  },
];

const footerInfo = [
  {
    icon: FaRegClock,
    title: "Opening Hours",
    info: "Monday - Sunday",
    description: "11:00AM - 11:00PM",
  },
  {
    icon: MdOutlineWifiCalling3,
    title: "Let's Talk",
    info: "Phone: 9145454545",
    description: "Fax: 1-800-222-4545",
  },
  {
    icon: IoMailOutline,
    title: "Book a Table",
    info: "Email: info@rest.com",
    description: "Support: cs@rest.com",
  },
  {
    icon: IoLocationOutline,
    title: "Our Address",
    info: "123 Anywhere Lane, Kolkata 712345",
    description: "West Bengal, India",
  },
];

const customerSayData = [
  {
    id: 1,
    profile: profile,
    name: "Sourav Chatterjee",
    location: "Kolkata, India",
    quote:
      "I absolutely loved the Chicken Biryani! The rice was aromatic, the chicken was tender, and the spices were balanced perfectly. One of the best biryanis I’ve had in the city.",
    thumbnail: thumbnail,
  },
  {
    id: 2,
    profile: profileTwo,
    name: "Ananda Mukherjee",
    location: "Salt Lake, Kolkata",
    quote:
      "The Mutton Curry with luchi was outstanding. The mutton was soft and juicy, cooked with rich spices that reminded me of traditional home-style cooking. Highly recommended!",
    thumbnail: thumbnailTwo,
  },
  {
    id: 3,
    profile: profileThree,
    name: "Rahul Banerjee",
    location: "Park Street, Kolkata",
    quote:
      "I tried the Chicken Rezala and it was just amazing! Creamy, flavorful, and paired beautifully with rumali roti. A must-try if you love Mughlai dishes.",
    thumbnail: thumbnailThree,
  },
];

export {
  navItems,
  buttonNames,
  aboutItems,
  popularItemData,
  socialIcons,
  footerInfo,
  customerSayData,
};
