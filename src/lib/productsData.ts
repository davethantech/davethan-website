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
    content: `## Enhance Your Restaurant Operations
Running a restaurant is no easy feat, and it goes far beyond just serving delicious meals. With **Dishstack**, you can streamline your operations to create exceptional dining experiences for your customers. 

This innovative **cloud-based solution** transforms the way you manage your restaurant, allowing you to focus on what you do best—crafting outstanding culinary delights while ensuring smooth operational flows.

## Comprehensive Management Tools at Your Fingertips
Dishstack equips restaurant owners, chefs, and managers with an **all-in-one platform** tailored to meet the unique challenges of the restaurant industry. 

**Key capabilities include:**
* **Order Tracking:** Keep your kitchen and front-of-house perfectly synced.
* **Inventory Management:** Handle stock levels seamlessly through our easy-to-use interface.
* **Customer Management:** Gain real-time access to data that helps you tailor experiences and keep diners coming back for more.`
  },
  {
    id: "2",
    name: "MediCore",
    slug: "medicore",
    tagline: "Simplifying Hospital Excellence",
    image: "/MediCore-Main-Logo.webp",
    externalUrl: "https://medicore.davethan.tech",
    content: `## Optimize Your Hospital with Our Cutting-Edge System
In an era where efficiency and patient care are paramount, our **Hospital Management System** rises to the occasion. 

Designed specifically for healthcare facilities of all sizes, this software solution integrates seamlessly into your existing infrastructure, enhancing operational workflows and improving overall service delivery.

## Your One-Stop Solution for Comprehensive Management
The Hospital Management System encompasses a multitude of features that cater to various departmental needs, offering a **holistic approach** to managing hospital operations. 

**Core functionalities include:**
* **Patient Registration & Scheduling:** Streamline the patient intake and appointment process.
* **Billing & Financials:** Simplify complex billing cycles with accurate, automated tools.
* **Inventory & Pharmacy:** Maintain critical stock levels and reduce the chances of errors.

Both administrative and clinical functionalities are housed under one robust platform, facilitating improved communication between departments.`
  },
  {
    id: "3",
    name: "SpringBoardERP",
    slug: "springboarderp",
    tagline: "Smart Solutions. Real Growth",
    image: "/SpringBoard-Main-Logo.webp",
    externalUrl: "https://springboarderp.davethan.tech",
    content: `## Streamline Your Business Operations
Introducing **Davethan SpringBoardERP**, a comprehensive enterprise resource planning solution tailored specifically for startups. This powerful tool is designed to streamline your business operations, enhance productivity, and facilitate seamless collaboration among your teams. 

With its user-friendly interface and innovative features, SpringBoardERP allows you to manage key business functions all in one platform:
* **Finance & Accounting**
* **Human Resources**
* **Inventory & Supply Chain**

## Affordable and Scalable
This ERP solution is not only powerful but also **cost-effective**, making it an ideal choice for startups operating on tight budgets. 

Davethan SpringBoardERP offers flexible pricing plans that can grow along with your business, ensuring you only pay for what you need. Its **scalable architecture** means that as your startup expands, you can easily add more features and user licenses to accommodate your growing team.

*In conclusion, if you’re a startup looking for a reliable solution to manage your business effectively, Davethan SpringBoardERP is your answer. Experience the simplicity and efficiency of our platform, and watch your business thrive.*`
  }
];
