// import React from 'react';
// import './Testi.css';
// import Avtr1 from '../../assets/avatar1.jpg';
// import Avtr2 from '../../assets/avatar2.jpg';
// import Avtr3 from '../../assets/avatar3.jpg';

// // import Swiper JS
// //  import {Swiper, SwiperSlide} from 'swiper/react';
// //  import {Pagination} from 'swiper';

 
// const testilist = [
//   {
//     id:1,
//     img : Avtr1,
//     clientname : "Anni",
//     testi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores odio ullam doloremque harum soluta odit iure perferendis veniam quis exercitationem, fugiat doloribus? Sequi quidem autem beatae voluptatibus voluptas iusto"
//   },
//   {
//     id:2,
//     img : Avtr2,
//     clientname : "syntya",
//     testi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores odio ullam doloremque harum soluta odit iure perferendis veniam quis exercitationem, fugiat doloribus? Sequi quidem autem beatae voluptatibus voluptas iusto"
//   },
//   {
//     id:3,
//     img : Avtr3,
//     clientname : "celok",
//     testi : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores odio ullam doloremque harum soluta odit iure perferendis veniam quis exercitationem, fugiat doloribus? Sequi quidem autem beatae voluptatibus voluptas iusto"
//   }
// ]

// const Testi = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>

//       <div className="container testimonials_countainer">
//         {
//           testilist.map(({id,img,clientname,testi}) => {
//             return (
//             <SwiperSlide key={id} className='testimonial'>
//               <div className="client_avatar">
//                 <img src={img} />
//               </div>
//               <h5 className='client_name'>{clientname}</h5>
//               <small className='client_review'>
//                 {testi}
//               </small>
//             </SwiperSlide>
//             )
//           }
//           )
//         }
//       </div>
//     </section>
//   )
// }

// export default Testi