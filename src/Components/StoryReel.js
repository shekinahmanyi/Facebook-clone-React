import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
    return (  
        <div className="storyReel">
         <Story image src="https://www.facebook.com/stories/240422584552803/UzpfSVNDOjMyNzUwODQ3Mjc2MDEzMA==/?view_single=1&source=shared_permalink"
          profileSrc="https://prod-takelessons.netdna-ssl.com/document/prifile_183419_pi_IMG_6868.JPG?v=1561606635" 
          title="Shekinah Manyi" />

         <Story image="https://www.pexels.com/photo/girl-wearing-blue-denim-dress-shirt-936120/"
          profileSrc="https://prod-takelessons.netdna-ssl.com/document/prifile_183419_pi_IMG_6868.JPG?v=1561606635" 
          title="Shekinah Achidi" />

            <Story image="https://www.pexels.com/photo/girl-wearing-blue-denim-dress-shirt-936120/"
             profileSrc="images/h1.png" 
          title="Che Bernice" />

            <Story image="https://www.pexels.com/photo/girl-wearing-blue-denim-dress-shirt-936120/"
          profileSrc="https://prod-takelessons.netdna-ssl.com/document/prifile_183419_pi_IMG_6868.JPG?v=1561606635" 
          title="Fri Sharon" />

         <Story image="https://www.pexels.com/photo/girl-wearing-blue-denim-dress-shirt-936120/"
          profileSrc="https://prod-takelessons.netdna-ssl.com/document/prifile_183419_pi_IMG_6868.JPG?v=1561606635" 
          title="Giren Ndengwi" />
         
        </div>
    );
}
 
export default StoryReel;