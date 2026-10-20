import gopalAvatar from "../assets/reviews/gopal-avatar.jpg";
import rehanaAvatar from "../assets/reviews/rehana-avatar.jpg";
import shubhamAvatar from "../assets/reviews/shubham-avatar.jpg";
import priyankaAvatar from "../assets/reviews/priyanka-avatar.jpg";
import mohanishAvatar from "../assets/reviews/mohanish-avatar.jpg";
import abhishekAvatar from "../assets/reviews/abhishek-avatar.jpg";
import sumitAvatar from "../assets/reviews/sumit-avatar.jpg";
import gopalPost from "../assets/reviews/gopal-post.jpg";
import rehanaPost from "../assets/reviews/rehana-post.jpg";
import shubhamPost from "../assets/reviews/shubham-post.jpg";
import priyankaPost from "../assets/reviews/priyanka-post.jpg";
import mohanishPost from "../assets/reviews/mohanish-post.jpg";
import abhishekPost from "../assets/reviews/abhishek-post.jpg";
import sumitPost from "../assets/reviews/sumit-post.jpg";
export const testimonials = [
  {
    id: "gopal",
    name: "Gopal jha",
    handle: "@Gopaljha04",
    topic: "Web development & DSA",
    quote:
      "Web dev Frontend to Backend , DB internals..etc, everything covered was in-depth and fully clear.",
    date: "Oct 19, 2025",
    url: "https://x.com/Gopaljha04/status/1979919555901190365",
    avatar: gopalAvatar,
    screenshot: gopalPost,
  },
  {
    id: "rehana",
    name: "Rehana Akter",
    handle: "@Rehana_27",
    topic: "DSA foundations",
    quote: "Great lecture, concept explained in in-depth.",
    date: "May 2, 2026",
    url: "https://x.com/Rehana_27/status/2050489919848747368",
    avatar: rehanaAvatar,
    screenshot: rehanaPost,
  },
  {
    id: "shubham",
    name: "Shubham Mishra",
    handle: "@Shubham05689029",
    topic: "CSS animations",
    quote: "css animations unlocked. my elements finally move with style.",
    date: "Sep 17, 2025",
    url: "https://x.com/Shubham05689029/status/1968339268495171831",
    avatar: shubhamAvatar,
    screenshot: shubhamPost,
  },
  {
    id: "priyanka",
    name: "Priyanka Lakhara",
    handle: "@codewithpri",
    topic: "JavaScript",
    quote: "Love the depth @rohit_negi9 bhaiya provides 🫡🙌🏻",
    date: "Oct 15, 2025",
    url: "https://x.com/codewithpri/status/1978398377948959099",
    avatar: priyankaAvatar,
    screenshot: priyankaPost,
  },
  {
    id: "mohanish",
    name: "Mohanish Lambole",
    handle: "@MohanishLambole",
    topic: "Java with Aditya Tandon",
    quote:
      "Clear your fundamentals and understand real logic with @adityatandon02.",
    date: "Feb 19, 2026",
    url: "https://x.com/MohanishLambole/status/2024445155693253079",
    avatar: mohanishAvatar,
    screenshot: mohanishPost,
  },
  {
    id: "abhishek",
    name: "Abhishek Rai",
    handle: "@AbhishekRai1972",
    topic: "JavaScript internals",
    quote:
      "learned Math.random() in depth and also know why it is not used to generate OTP",
    date: "Oct 1, 2025",
    url: "https://x.com/AbhishekRai1972/status/1973379557202747825",
    avatar: abhishekAvatar,
    screenshot: abhishekPost,
  },
  {
    id: "sumit",
    name: "Sumit Mishra",
    handle: "@Sumit0431",
    topic: "Learning JavaScript",
    quote:
      "Special thanks to @rohit_negi9 for teaching me & sharing this valuable knowledge",
    date: "Oct 2, 2026",
    url: "https://x.com/Sumit0431/status/2105881435831967807",
    avatar: sumitAvatar,
    screenshot: sumitPost,
  },
];
export type Testimonial = (typeof testimonials)[number];
