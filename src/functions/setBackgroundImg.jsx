export const preloadImages = () => {
  const urls = [
    "https://cdn.24.co.za/files/Cms/General/d/7603/eb781f6387cc471c8e31c12ebca61947.jpg",
    "https://cloudfront-us-east-1.images.arcpublishing.com/coxohio/I3CJL65XYBCYVIGMYLZRX3GQQA.jpg",
    "https://freerangestock.com/sample/70507/night-sky-filled-with-stars-and-moon.jpg",
    "https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?cs=srgb&dl=pexels-asphotograpy-96622.jpg&fm=jpg",
    "https://i.pinimg.com/originals/47/0c/f4/470cf4da51b226c4476a2855c5cf7367.jpg",
    "https://projectorgram.com/wp-content/uploads/snowfall-projectorgram.png",
    "https://images.unsplash.com/photo-1500740516770-92bd004b996e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGNsb3VkeSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.squarespace-cdn.com/content/v1/591f8b9f37c58169885edc0e/1582215330072-M6EZIEVS92DCIHJMS7JS/DSC08248.jpg",
  ];

  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const setBackgroundImg = (weatherName) => {
  switch (weatherName) {
    case "partly-cloudy-day":
      return "url('https://cdn.24.co.za/files/Cms/General/d/7603/eb781f6387cc471c8e31c12ebca61947.jpg')";
    case "partly-cloudy-night":
      return "url('https://cloudfront-us-east-1.images.arcpublishing.com/coxohio/I3CJL65XYBCYVIGMYLZRX3GQQA.jpg')";
    case "clear-night":
      return "url('https://freerangestock.com/sample/70507/night-sky-filled-with-stars-and-moon.jpg')";
    case "clear-day":
      return "url('https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?cs=srgb&dl=pexels-asphotograpy-96622.jpg&fm=jpg')";
    case "rain":
      return "url('https://i.pinimg.com/originals/47/0c/f4/470cf4da51b226c4476a2855c5cf7367.jpg')";
    case "snow":
      return "url('https://images.unsplash.com/photo-1610994190597-d466315c723f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    case "cloudy":
      return "url('https://images.unsplash.com/photo-1500740516770-92bd004b996e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFyayUyMGNsb3VkeSUyMHNreXxlbnwwfHwwfHx8MA%3D%3D')";
    case "fog":
      return "url('https://images.squarespace-cdn.com/content/v1/591f8b9f37c58169885edc0e/1582215330072-M6EZIEVS92DCIHJMS7JS/DSC08248.jpg')";
    case "wind":
      return "url('https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    default:
      return "";
  }
};

export default setBackgroundImg;
