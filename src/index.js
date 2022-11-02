import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import Nav from "./component/nav"
import Slider from "./component/slider"
import Event from "./component/event"
import {GandhiJyanti,sports,Drawing,UniformDistribution,harGharTrianga,NishulkHeart,TeacherDay,TrafficRules,YogDiwas,GyanUtsav} from "./component/Arrays"
import Library from "./component/Library"
import Teacher from "./component/Teachers"
import Footer from "./component/footer"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
    <Nav/>
    <Slider/>
    <Event array={GandhiJyanti} heading="gandhi jayanti" />
    <Event array={sports} heading="sports Day" />
    <Event array={Drawing} heading="Drawing Competition" />
    <Event array={UniformDistribution} heading="Uniform Distribution" />
    <Event array={harGharTrianga} heading="Har Ghar Trianga" />
    <Event array={NishulkHeart} heading="Nishulk Heart" />
    <Event array={TeacherDay} heading="Teacher Day" />
    <Event array={TrafficRules} heading="Traffic Rules" />
    <Event array={YogDiwas} heading="Yog Diwas" />
    <Event array={GyanUtsav} heading="Gyan Utsav" />
    <Library/>
    <Teacher/>
    <Footer/>

    </div>
);

