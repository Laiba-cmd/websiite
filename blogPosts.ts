export interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    author: string;
    excerpt: string;
    content: string;
    image: string;
    slug: string;
    imageslug: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Going all-in with millennial design",
      category: "Wood",
      date: "14 Oct 2022",
      author: "Admin",
      excerpt: "Exploring the latest trends in millennial interior design and sustainable living spaces.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
  
      In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.`,
      image: "/Rectangle 68 (1).png",
      slug: "going-all-in-with-millennial-design",
      imageslug: "/Rectangle 69.png"
    },
    {
      id: 2,
      title: "Exploring new ways of decorating",
      category: "Handmade",
      date: "03 Aug 2022",
      author: "Admin",
      excerpt: "Innovative approaches to home decoration that blend creativity and functionality.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
  
      In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.`,
      image: "/Rectangle 68 (2).png",
      slug: "exploring-new-ways-of-decorating",
      imageslug:"/Rectangle 69 (1).png"
    },
    {
      id: 3,
      title: "Handmade pieces that took time to make",
      category: "Wood",
      date: "14 Oct 2022",
      author: "Admin",
      excerpt: "Celebrating the art of craftsmanship and the beauty of slow, intentional design.",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.
  
      In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat.`,
      image: "/Rectangle 68 (3).png",
      slug: "handmade-pieces-that-took-time-to-make",
      imageslug: "/Rectangle 69 (2)"
    }
  ];
  
  export const categories = [
    { name: "Crafts", count: 2 },
    { name: "Design", count: 8 },
    { name: "Handmade", count: 7 },
    { name: "Interior", count: 1 },
    { name: "Wood", count: 6 }
  ];