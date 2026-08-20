export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  image: string;
  externalUrl: string;
  content: React.ReactNode;
}

export const productsData: Product[] = [
  {
    id: "1",
    name: "Dishstack",
    slug: "dishstack",
    tagline: "Your Restaurant’s Game-Changer",
    image: "/Dishstack-Main-Logo.webp",
    externalUrl: "https://dishstack.davethan.tech",
    content: `
      ### Enhance Your Restaurant Operations
      Running a restaurant is no easy feat, and it goes far beyond just serving delicious meals. With Dishstack, you can streamline your operations to create exceptional dining experiences for your customers. This innovative cloud-based solution transforms the way you manage your restaurant, allowing you to focus on what you do best—crafting outstanding culinary delights while ensuring smooth operational flows.

      ### Comprehensive Management Tools at Your Fingertips
      Dishstack equips restaurant owners, chefs, and managers with an all-in-one platform tailored to meet the unique challenges of the restaurant industry. From order tracking to inventory management, every essential aspect of your restaurant is handled seamlessly through our easy-to-use interface. Imagine having real-time access to your customer management data, which helps you tailor experiences that keep diners coming back for more.
    `
  },
  {
    id: "2",
    name: "MediCore",
    slug: "medicore",
    tagline: "Simplifying Hospital Excellence",
    image: "/MediCore-Main-Logo.webp",
    externalUrl: "https://medicore.davethan.tech",
    content: `
      ### Optimize Your Hospital with Our Cutting-Edge System
      In an era where efficiency and patient care are paramount, our Hospital Management System rises to the occasion. Designed specifically for healthcare facilities of all sizes, this software solution integrates seamlessly into your existing infrastructure, enhancing operational workflows and improving overall service delivery.

      ### Your One-Stop Solution for Comprehensive Management
      The Hospital Management System encompasses a multitude of features that cater to various departmental needs. From patient registration and appointment scheduling to billing and inventory management, it offers a holistic approach to managing hospital operations. Both administrative and clinical functionalities are housed under one robust platform, facilitating improved communication between departments and reducing the chances of errors.
    `
  },
  {
    id: "3",
    name: "SpringBoardERP",
    slug: "springboarderp",
    tagline: "Smart Solutions. Real Growth",
    image: "/SpringBoard-Main-Logo.webp",
    externalUrl: "https://springboarderp.davethan.tech",
    content: `
      ### Streamline Your Business Operations
      Introducing Davethan SpringBoardERP, a comprehensive enterprise resource planning solution tailored specifically for startups. This powerful tool is designed to streamline your business operations, enhance productivity, and facilitate seamless collaboration among your teams. With its user-friendly interface and innovative features, SpringBoardERP allows you to manage key business functions such as finance, human resources, inventory, and more, all in one platform.

      ### Affordable and Scalable
      This ERP solution is not only powerful but also cost-effective, making it an ideal choice for startups operating on tight budgets. Davethan SpringBoardERP offers flexible pricing plans that can grow along with your business, ensuring you only pay for what you need. Its scalable architecture means that as your startup expands, you can easily add more features and user licenses to accommodate your growing team.

      In conclusion, if you’re a startup looking for a reliable solution to manage your business effectively, Davethan SpringBoardERP is your answer. Experience the simplicity and efficiency of our platform, and watch your business thrive.
    `
  }
];
