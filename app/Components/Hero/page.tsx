import "./hero.css"

export default function page(){
    return(
        <div className="slider">
        <div className="slides">
          <div className="slide">
            <img src="/heropecarch.jpg" alt="Image 1" height="500px"  />
          </div>
          <div className="slide">
            <img src="/heroimgtwo.avif" alt="Image 2" width="949" height="712"/>
          </div>
          <div className="slide">
            <img src="/heroimgthree.webp" alt="Image 3"/>
          </div>
        </div>
      </div>

        // <div className="slider">
        //     <div className="slides">
        //         <div className="slide">
        //             <img id="hero_one" src="/heropecarch.jpg" alt="pec-arch" width="1503px" height="713px"/>
        //         </div>
        //     </div>
        //     <div className="slides">
        //         <div className="slide">
        //             <img id="hero_two" src="/heroimgtwo.avif" alt="" />
        //         </div>
        //     </div>
        //     <div className="slides">
        //         <div className="slide">
        //            <img id="hero_three" src="/heroimgthree.webp" alt="" />
        //         </div>
        //     </div>
        // </div>
    )
}