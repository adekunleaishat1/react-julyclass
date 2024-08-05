import React,{useEffect,useRef, useState} from 'react'
import axios from 'axios'

const Music = () => {
    const [allmusic , setallmusic] = useState([])
    const [isplaying , setisplaying] = useState(false)
    let audioRef = useRef([])
   useEffect(() => {
     axios.get("https://robo-music-api.onrender.com/music/my-api")
     .then((res)=>{
        console.log(res);
        setallmusic(res.data)
        console.log(allmusic);
     }).catch((err)=>{
        console.log(err);
     })
   
   
   }, [])
   const playmusic = (el,i) =>{
     let music = audioRef.current[i]
    console.log();
    if (isplaying == false) {
        music.play()
        setisplaying(true)
    }else{
        setisplaying(false)
        music.pause()
    }
  
   }
   

  return (
    <div className='container-fluid'>
        <div className='row gap-3'>
          
           {allmusic.map((el, i)=>(
            <>
            <div className='col-3' class="card" style={{width: "18rem"}}>
                <audio ref={el =>audioRef.current[i] = el } src={el.songUrl}></audio>
                 <img src={el.songImage} class="card-img-top" alt="..."/>
             <div class="card-body">
              <h5 class="card-title">{el.songTitle}</h5>
               <p class="card-text">{el.artistName}</p>
               <button onClick={()=>playmusic(el.songUrl, i)} class="btn btn-primary">Go somewhere</button>
               </div>
             </div>
            </>
        )) }
          
        </div>
      

    </div>
  )
}

export default Music