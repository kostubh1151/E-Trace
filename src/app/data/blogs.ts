import blogImg from "../../assets/recycling.png";
type BlogCard = {
    id: any;
    title: string;
    description: string;
    image: any;
  };
  
export const blogs: BlogCard[] = [
  {
    id: 1,
    title: "What is E-Waste: A Comprehensive Guide",
    description:" Electronics waste, sometimes called E-waste or E-scrap, is the trash that comes from old electronic devices. There is no absolute definition for what is considered E-waste, but it generally refers to any item with a cord, battery, or plug that is discarded. The most common E-wastes are mobile phones, televisions, personal computers, laptops, tablets, DVDs, air conditioners, and microwave ovens.",
    image: blogImg,
  },
     {
      id: 2,
      title: "Advancements and Solutions in E-Waste Recycling Technologies",
      description:
        "Innovative e-waste recycling technologies are rapidly advancing, offering efficient solutions for managing electronic waste. From robotic disassembly to chemical extraction and bioremediation, these advancements underscore the push towards sustainable practices in e-waste management.",
      image: blogImg,
    }, {
      id: 3,
      title: "The Lifecycle Journey of Electronic Devices: From Manufacturing to Recycling",
      description:
        "Discover the lifecycle of electronic devices, from production to recycling, and the obstacles encountered at each phase. Examine the environmental ramifications of electronics at every stage, underscoring the significance of conscientious consumption and recycling. Delve into actionable advice for individuals to reduce e-waste generation in their households.",
      image: blogImg,
    },
  
    {
      id: 5,
      title: "Exploring the Health Effects of E-Waste: A Comprehensive Analysis",
      description:
        "Exposure to hazardous substances like lead, mercury, and cadmium, commonly found in electronic devices, can lead to serious health issues such as neurological disorders, respiratory problems, and reproductive issues. Improper handling and disposal of e-waste further exacerbate these risks, particularly in communities where informal recycling practices are prevalent. By understanding the depth of these health impacts, stakeholders can advocate for better regulations and practices to safeguard public health and promote responsible e-waste management.",
      image: blogImg,
    },
    {
      id: 4,
      title: "Minimizing E-Waste: Practical Advice for Consumers",
      description:
        "To reduce e-waste at home, consumers can adopt simple yet impactful practices. First, consider repairing devices instead of replacing them when possible. Additionally, donate or recycle electronics that are no longer needed rather than throwing them away. When purchasing new electronics, opt for durable and repairable products with minimal packaging. Finally, educate yourself on proper e-waste disposal methods to ensure responsible recycling or disposal of electronic devices. These small steps can collectively make a significant difference in reducing e-waste generation at home.",
      image: blogImg,
    },
    {
      id: 6,
      title: "Global E-Waste Regulations: An Overvie",
      description:
        "E-waste regulations vary worldwide, reflecting the diverse approaches to managing electronic waste. Some regions have implemented strict laws to govern e-waste disposal and recycling, aiming to minimize environmental and health risks. These regulations often include requirements for proper handling, recycling, and disposal of electronic devices. However, enforcement and compliance can vary, posing challenges in effectively managing e-waste on a global scale. Collaboration between governments, industries, and communities is crucial to ensure consistent and effective regulation of e-waste across borders, promoting sustainable practices and mitigating environmental impact.",
      image: blogImg,
    },
    {
      id: 7,
      title: "Success Stories and Insights from E-Waste Awareness Campaigns",
      description:
        "E-waste awareness campaigns have proven instrumental in educating the public about the importance of responsible electronic waste management. Successful initiatives have utilized various channels such as social media, community workshops, and educational programs to reach diverse audiences. By highlighting the environmental and health impacts of e-waste and providing practical recycling solutions, these campaigns have empowered individuals to make informed choices. Key lessons learned include the importance of engaging stakeholders, tailoring messages to target audiences, and fostering partnerships to amplify impact. Overall, these efforts contribute to a more sustainable approach to handling electronic waste globally.",
      image: blogImg,
    },
    {
      id: 8,
      title: "E-Waste Art: Turning Old Electronics into Creative Masterpieces",
      description:
        "E-waste art breathes new life into discarded electronics, transforming them into captivating works of creativity. Artists repurpose old circuit boards, wires, and other electronic components to craft sculptures, installations, and even wearable art. These pieces not only showcase the beauty of repurposing but also raise awareness about the environmental impact of electronic waste. Through their innovative creations, e-waste artists inspire viewers to reconsider their relationship with technology and explore sustainable alternatives.",
      image: blogImg,
    },
    {
      id: 9,
      title: "The Contribution of Electronics Manufacturers to E-Waste Reduction",
      description:
        "Electronics manufacturers play a pivotal role in reducing e-waste through various initiatives. They can design products with longevity and repairability in mind, allowing for easier maintenance and extending the lifespan of devices. Additionally, manufacturers can incorporate recyclable materials into their products and adopt sustainable production practices to minimize waste generation during manufacturing. Providing take-back programs for end-of-life products and partnering with recycling facilities further facilitate responsible disposal and recycling of electronic devices. By taking proactive steps to reduce waste at every stage of the product lifecycle, electronics manufacturers can significantly contribute to e-waste reduction efforts",
      image: blogImg,
    },
  ];
  export const randomBlogs = blogs.slice(4).sort(() => Math.random() - 0.5).slice(0, 3);
  