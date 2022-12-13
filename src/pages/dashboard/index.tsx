import axios from 'axios';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { AUTHORIZE_URL } from '../../configs';
let a = 0;
const Dashboard: FC<any> = () => {

 
  // const endpoints = {
  //   get: `http://localhost:2020/events`,
  //   remove: `http://localhost:2020/events`,
  //   update: `http://localhost:2020/events`,
  //   create: `http://localhost:2020/events/create`,
  //   attende: `http://localhost:2020/events/attende/`,
  //   getuserevents: `http://localhost:2020/events/user-events`
  // };
  // const [events, setEvents] = useState<any[]>([]);
  // const [userEvents, setUserEvents] = useState<any[]>([]);

  // const getToken = () => {
  //   const tk = localStorage.getItem("ACCESS_TOKEN");
  //   if(tk) {
  //     return {
  //       authorization: `Bearer ${tk}`,
  //     }
  //   }
  //   return {}
  // }


  // const get = () => {
  //   fetch(`http://localhost:2020/events`)
  //     .then((response: any) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setEvents(res.data.events);
  //     });
  // };
  // useEffect(() => {
  //   if (events.length === 0) {
  //     get();
  //   }
  // }, []);

  // const createEvenet = () => {
  //   axios
  //     .post(endpoints.create, null, {
  //       headers: getToken(),
  //     })
  //     .then((res) => {})
  //     .catch((err) => console.log(err));
  // };

  // const remove = (id: string) => {
  //   axios
  //     .delete(`${endpoints.remove}/${id}`, {
  //       headers: {...getToken(),   'content-type': 'text/json'} 
  //     })
  //     .then((res) => {
  //       if (res.data.data.message) {
  //         get();
  //       }
  //     });
  // };
  // const update = (eventId: string) => {
  //   const evenet = events.filter((event) => event.eventID === eventId)[0];
  //   if (evenet) {
  //     axios
  //       .put(
  //         `${endpoints.update}/${eventId}`,
  //         { ...evenet, name: `${Math.random() *10}-updated` },
  //         {
  //           headers: getToken()
  //         }
  //       )
  //       .then((res) => {
  //         if (res.data.data.message) {
  //           get();
  //         }
  //       });
  //   }
  // };


  // const createEvent = () => {
  //   const name = Math.random() *100;

  //   const model = {
  //     name: `event - ${name}`,
  //     dateTime: '10/10/10',
  //     description: 'shjshdsjdhsjdhsdjs',
  //     location: 'Yerevan',
  //     gudelinnes: 'dhjhdjhdjh',
  //     endDate: '10/10/10',
  //     eventType: 'sodtware development',
  //    speaker: {
  //     fullName:'Valodya Papikyan',
  //     talk: 'js',
  //     company: 'Ameriabank',
  //    }
  //   };
  //   axios
  //     .post(
  //       `${endpoints.create}`,
  //       { ...model },
  //       {
  //         headers: getToken()
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.statusCode === 200) {
  //         get();
  //       }
  //     });
  // };

  // const deleteAll = () => {
  //   Promise.all([
  //     events.map((event) => {
  //       axios
  //         .delete(`${endpoints.remove}/${event.eventID}`, {
  //           headers:  {...getToken(), 'content-type': 'text/json', }
  //         })
  //         .then((res) => {
  //           if (res.data.data.message) {
  //             get();
  //           }
  //         });
  //     }),
  //   ]);
  // };

  // const attendeEvent = (id: string) => {
  //   const model = {
  //     company: `company-${Math.random()}`,
  //     direction: 'senior',
  //     experience: 10,
  //     acceptenceOfTermsConds: true,
  //     email: `${Math.random()}@test.com`,
  //   };

  //   axios
  //     .post(`${endpoints.attende}${id}`, {...model},{
  //       headers:  {...getToken(), 'content-type': 'text/json', }
  //     })
  //     .then((res) => {
  //      if(res.data.statusCode === 200) {
  //        getMyEvents()
  //      }
  //     }).catch((err)=> {
        
  //     })
  // };

  // const getMyEvents = () => {
  //   axios
  //   .get(endpoints.getuserevents, {
  //     headers:  {...getToken(), 'content-type': 'text/json', }
  //   })
  //   .then((res) => {
      
  //     if(res.data.data.events) {
  //       setUserEvents(res.data.data.events.filter(Boolean))
  //     }
      
  //   })
  //   .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   getMyEvents()
  // },[])





  return (
    // <div>
    //   <h1>dashboard</h1>
    //   {events.map(({ name, eventID }) => {
    //     return (
    //       <>
    //         <div>
    //           <div key={eventID} onClick={() => update(eventID)}>
    //             {name}
    //           </div>
    //           <div>
    //             <button onClick={() => attendeEvent(eventID)}>attende</button>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   })}
    //   <h1>my evevnts</h1>
    //   <div>

    //   {userEvents.map(({ name, eventID }) => {
    //     return (
    //       <>
    //         <div>
    //           <div style={{color: 'red'}} key={eventID} onClick={() => update(eventID)}>
    //             {name}
    //           </div>
    //           <div>
    //           </div>
    //         </div>
    //       </>
    //     );
    //   })}

    //   </div>
    //   <button onClick={() => createEvent()}>create event</button>
    //   <button onClick={() => deleteAll()}>delete all</button>
    //   <button onClick={getMyEvents}> GET USER EVENTS </button>
    //   {/* <button > get </button>
    //   <button onClick={createEvenet}> create </button>

    //   <button onClick={remove}> remove </button>
    //   <button onClick={update}> update </button> */}
    // </div>
    <div style={{marginTop: '300px'}}>dashboard</div>
  );
};

export default Dashboard;
