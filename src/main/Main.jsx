import React from 'react';
import "../navbar/navbar.css"
import "./main.css"
import Video from "./img/Video.m4v"
import self from "./img/self.png"
import { useState } from 'react';

const Main = () => {


    const [blockStyle , setBlockStyle] = useState({transition: "1s"})

    function handleClick() {
        setBlockStyle({ width: "40%" , height: "80%" , transform: "rotateY(0deg)" , margin: "20px" , transition: "1s" })
    }
    
    function handleReset() {
        setBlockStyle({transition: "1s"})
    }



    return (
        <>
            <div className='section1'>
                <div className='section1--left'>
                    SARY
                </div>

                <div className='section1--center'></div>

                <div className='section1--right'>
                    SARY
                </div>
            </div>

            <div className='section2'>
                <div className='section2--inner'>
                    <video id='video' muted autoPlay loop src={Video}></video>
                    <div className='infoblocks'>
                        <div style={blockStyle} className='block left'>
                            <div className='block--text'>
                                <img className='picture' src={self} alt="self" />
                                <div>
                                    Меня зовут Тилек. Родился 1 июля 2003 года в Таласской области. Окончил в Таласе детский сад,
                                    после переехал в Бишкек. Где обучался в 5 гимназии (ныне 5 лицей). Особых достижений требующих
                                    внимания нету.   
                                </div>
                            </div>
                            
                        </div>

                        <div onClick={handleClick} onDoubleClick={handleReset} className='block center'>BUTTON</div>

                        <div style={blockStyle} className='block right'>
                            <div className='block--text'>
                                <div>
                                    По характеру я человек сдержанный, вдумчивый, спокойный, разносторонний, с очень необычным чувством 
                                    юмора. Увлекаюсь всеми видами спорта, вот прям все нравится. Люблю астрономию, космос, технологии, машины. 
                                    Люблю рисовать, монтировать видео, битмейкинг. Пробовал себя в дизайнерстве, видео-монтаже, 2д анимации, музыка. 
                                    На будущее, наверное как и все, планирую добиться достойного, стабильного, спокойного уровня жизни.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section3'>
                <div className='section3--left'>

                </div>
                <div className='section3--right'>

                </div>
            </div>

            <div className='section4'>
                <div className='blink'></div>
                <div className='section4--glass'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quasi, sint sunt consequuntur officiis nostrum sit eligendi tempore eveniet, beatae neque laboriosam nesciunt nam ea delectus blanditiis ut molestiae perferendis.
                </div>
            </div>
        </>
    );
};

export default Main;