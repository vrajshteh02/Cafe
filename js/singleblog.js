// Blog post data
const posts = {
  post1: {
    title: "The Art of Brewing Perfect Coffee",
    date: "15 August, 2024",
    image: "images/gallery/gallery3.jpg",
    content: `Discover the secrets to crafting the perfect cup of coffee by starting with high-quality beans, whether you prefer smooth Arabica or bold Robusta. Master the art of grind size, with fine grounds for espresso and coarse for French press.<br><br> Ensure your water is between 195°F and 205°F, and maintain a coffee-to-water ratio of 1:16 for the best brew. Explore different brewing methods, such as pour-over or AeroPress, and always use fresh water and clean equipment to maximize flavor.`,
    content2: `Consistency is key to brewing the perfect cup. Always measure your coffee and water to maintain the ideal ratio, and experiment with the brewing time to fine-tune the strength and flavor. Pay attention to the freshness of your beans—coffee is best consumed within two weeks of roasting.<br><br> To elevate your brew, try different brewing techniques like Chemex for a cleaner taste or the French press for a rich, full-bodied experience. With practice and precision, you’ll unlock the full potential of your coffee at home.`
  },
  post2: {
    title: "Coffee and Health: Myths vs. Facts",
    date: "1 August, 2024",
    image: "images/gallery/gallery2.jpg",
    content: `Coffee has long been surrounded by myths, like causing dehydration and stunting growth, but the truth is far different. Moderate coffee consumption doesn't dehydrate you and has no effect on height. In fact, coffee is rich in antioxidants, promoting overall health.<br><br> However, too much caffeine can disrupt sleep and cause restlessness, so it’s best enjoyed earlier in the day. Overall, moderate coffee intake has been linked to improved focus and a reduced risk of diseases like Alzheimer's and Parkinson's.`,
    content2: `In addition to its energizing properties, coffee may lower the risk of certain diseases. Studies suggest that regular coffee drinkers are less likely to develop Type 2 diabetes, thanks to compounds in coffee that improve insulin sensitivity. <br><br> There's also evidence that moderate coffee consumption supports heart health by lowering the risk of stroke. However, those with high blood pressure or pregnant women should monitor their intake. Overall, coffee, when consumed in moderation, can be part of a healthy lifestyle.`
  },
  post3: {
    title: "Exploring Coffee Varieties Worldwide",
    date: "21 July, 2024",
    image: "images/gallery/gallery1.avif",
    content: `Take a global tour of coffee varieties and discover how different regions shape flavor profiles. Ethiopian coffee is known for its fruity brightness, while Colombian beans offer a balanced caramel-nutty flavor. <br><br>Sumatra produces earthy, full-bodied coffee with low acidity, and Brazil’s chocolatey, creamy beans make for a perfect espresso. Jamaican Blue Mountain coffee, one of the world’s most sought-after varieties, offers a mild and smooth taste, showcasing the vast range of coffee flavors across the world.`,
    content2: `As you explore the vast world of coffee, consider the impact of altitude and processing methods on the taste of beans. Higher elevations produce beans with more complex flavors, often leading to brighter acidity and fruitier notes. <br><br>Washed beans tend to have a cleaner, sharper flavor, while naturally processed beans retain more sweetness and body. Whether you're savoring a delicate Ethiopian Yirgacheffe or a bold Sumatran Mandheling, the variety of coffee available offers endless opportunities for discovery.`
  },
  post4: {
    title: "How to Pair Coffee with Desserts",
    date: "21 July, 2024",
    image: "images/gallery/gallery5.jpg",
    content: `Pairing coffee with desserts can elevate your tasting experience. A bold espresso cuts through the richness of chocolate cake, while a creamy cappuccino complements the tangy smoothness of cheesecake.<br><br> Light roast coffee pairs beautifully with fruit tarts, enhancing their bright flavors, and a mild latte works wonders with cookies. For a perfect indulgence, try matching the coffee-infused tiramisu with a mocha, allowing the flavors of chocolate and coffee to intertwine seamlessly.`,
    content2: `The art of pairing extends beyond just flavor—it also involves texture and temperature. A silky mousse paired with a rich dark roast can create a harmonious contrast, while pairing an iced coffee with a warm, gooey brownie can elevate both experiences.<br><br> Think about complementary flavors, like the citrusy notes in certain coffees that enhance the zest of a lemon tart. By understanding how coffee interacts with different desserts, you can create unforgettable taste pairings that leave a lasting impression.`
  },
  post5: {
    title: "The History of Coffee Culture",
    date: "21 July, 2024",
    image: "images/gallery/gallery4.avif",
    content: `Coffee’s history is rich and varied, starting with its legendary discovery by an Ethiopian goat herder. By the 15th century, coffeehouses became popular in the Middle East as places for intellectual and social gatherings. <br><br>The trend reached Europe in the 17th century, where "penny universities" thrived. Modern café culture continues to shape communities worldwide, from Paris to Seattle, with specialty coffee driving innovation in brewing methods, flavors, and café experiences, making coffee an enduring cultural phenomenon.`,
    content2: `As coffee culture evolved, it became more than just a beverage—it turned into a symbol of connection. From 18th-century Parisian coffeehouses, where artists and philosophers gathered to debate, to 20th-century American diners serving bottomless cups, coffee became a social experience.<br><br> Today’s specialty cafés continue this tradition, offering spaces for creativity and innovation, from latte art competitions to sustainability initiatives in sourcing beans. Coffee’s journey through time is a testament to its role in shaping cultural and social movements.`
  },
  post6: {
    title: "How to Choose the Best Coffee Beans",
    date: "21 July, 2024",
    image: "images/gallery/gallery6.jpg",
    content: `Choosing the best coffee beans starts with understanding roast types—light roasts are acidic and bright, while dark roasts offer rich, bold flavors. Single-origin beans showcase the unique characteristics of a specific region, while blends balance multiple flavors. <br><br>Beans from different countries have distinct profiles, such as fruity African or nutty South American varieties. Always check the roast date for freshness and grind the beans just before brewing to preserve their aroma and flavor, ensuring the best possible cup.`,
    content2: `Another important factor to consider is whether to choose organic or ethically sourced coffee. Organic beans are grown without synthetic fertilizers and pesticides, promoting a healthier environment and potentially a cleaner taste. Fair trade or direct trade options ensure that the farmers receive fair compensation, supporting sustainable farming practices. <br><br>Understanding the roast level, origin, and certification of the beans you buy can greatly enhance your coffee experience and align your choices with your values.`
  }
};


function getQueryParam(param) {

  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams);

  return urlParams.get(param);
}

const postId = getQueryParam('post');
const post = posts[postId];

if (post) {
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-date').textContent = post.date;
  document.getElementById('post-image').src = post.image;
  document.getElementById('post-content').innerHTML = post.content;
  document.getElementById('post-content2').innerHTML = post.content2;
} else {
  document.getElementById('post-title').textContent = "Post not found!";
}

