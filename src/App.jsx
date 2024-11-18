import React from 'react'
import Card from './components/Card'
import { HiOutlineLogout, HiOutlineLogin} from 'react-icons/hi'
import {AiOutlineUserAdd, AiOutlineUserDelete ,AiOutlineUserSwitch} from 'react-icons/ai'
import {BsHouseAdd, BsHouseCheck, BsPeople} from 'react-icons/bs'

import Plot from 'react-plotly.js';
import { data, layout } from '../public/mapdata'

export default function App() {
  return (
      <div className='p-16 flex flex-col gap-y-4 items-center'>
      {/*< h3 className="text-title-alt text-lg font-bold">Data collection status - Last 30 days</h3>*/}
        <section className="grid grid-cols-2 gap-8 mb-4">
          <Card label={'Household Registration'} value={143} icon={<BsHouseAdd className="text-[42px] font-thin "/>} />
          <Card label={'Household Visit'} value={294} icon={<BsHouseCheck className="text-[42px] font-thin"/>} />
          <Card label={'Member Enumeration'} value={589} icon={<AiOutlineUserAdd className="text-[42px] font-thin "/>}/>
          <Card label={'Change Head Household'} value={24} icon={<AiOutlineUserSwitch className="text-[42px] font-thin "/>}/>
        </section>
        <section className="grid grid-cols-2 gap-8">
            <Card label={'Marital Relationship'} value={95} icon={<BsPeople className="text-[42px] font-thin "/>}/>
            <Card label={'External InMigration'} value={45} icon={<HiOutlineLogout className="text-[42px] font-thin"/>}/>
            <Card label={'Internal InMigration'} value={245} icon={<HiOutlineLogin className="text-[42px] font-thin "/>}/>
            <Card label={'Death Registration'} value={45} icon={<AiOutlineUserDelete className="text-[42px] font-thin "/>}/>
          </section>
          <section className='flex flex-col gap-8 mt-8'>
            <div className='w-[500px] h-[400px] border rounded-3xl shadow-lg'>
              <Plot 
              className='w-[480px] p-2'
              data={[
                {x:[1,4,7,8,9,13,16,18,23,25,27,28,29], 
                 y:[23,20,23,20,14,18,17,19,15,12,12,10],
                 mode: 'lines+markers',
                 type: 'scatter',
                 marker: {size: 4, color:"green"},
                 line:{dash:"solid", shape:"spline"},
                },
              ]}
              layout = {{
                title: 'Total visits',
                height:350,
                weigth:380,
                margin:{
                    autoexpand:false,
                    t:40,
                    l:45,
                    r:10,
                    b:40
                  },
                xaxis: {
                  title: 'Day',
                  zeroline:false
                },
                yaxis: {
                  title: 'Visits',
                  zeroline:false
                }
              }}

              config={{responsive: false, displayModeBar: false}}
              />
            </div>
            <div className='w-[500px] h-[400px] border rounded-3xl shadow-lg'>
            <Plot 
              className='w-[480px] p-2'
              data={[
                {x:[1,4,7,8,9,13,16,18,23,25,27,28,29], 
                 y:[123,220,223,140,143,189,170,190,159,222],
                 mode: 'lines+markers',
                 type: 'scatter',
                 marker: {size: 4, color:"green"},
                 line:{dash:"solid", shape:"spline", smoothing:0.9},
                },
              ]}
              layout = {{
                title: 'Total events captured',
                height:350,
                weigth:380,
                margin:{
                    autoexpand:false,
                    t:40,
                    l:45,
                    r:10,
                    b:40
                  },
                xaxis: {
                  title: 'Day',
                  zeroline:false
                },
                yaxis: {
                  title: 'Events',
                  zeroline:false
                }
              }}

              config={{responsive: false, displayModeBar: false}}
              />
            </div>
            <div className='relative w-[500px] h-[400px] overflow-hidden border rounded-3xl shadow-lg'>
              <p className='text-center p-2 rounded-br-xl rounded-bl-xl bg-white shadow font-semibold absolute z-10 right-[36%]'>Visited Households</p>
              <Plot 
              className=''
              data={data} 
              layout={layout}
              config={{responsive: false, displayModeBar: false}}
              ></Plot>
            </div>
          </section>
      </div>
  )
}
