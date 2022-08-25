import React from 'react';
import facebook from "../../assets/Images/facebook.png";
import fish1 from "../../assets/Images/fish1.jpg";
import PageLayout from '../../layouts/PageLayout';
const BlogPage = () => {
  return (
    <PageLayout>
      <section>
        {/* latest News Banner */}

       
        <div
          className=""
        >
          <div className="max-w-4xl md:mx-auto flex h-full min-h-[300px] items-center mx-5">
           
            <div className='mt-20'>
            <h1 className="text-4xl font-medium">This is title where i am going to write the tile of a page. this is title. 
            </h1>
            <p className="text-sm mt-2 font-semibold">
              Date : {new Date().toLocaleDateString()}  Time :{" "}
              {new Date().toLocaleTimeString()}
            </p>
            </div>
          </div>
        </div>
      

        {/* Recent Blog */}
        <div className="grid  md:grid-cols-6 gap-1 ">
          {/* blog Image */}
          <div className="col-span-5 mx-5 md:mx-0">

            <img className="rounded mx-auto object-cover h-64 w-full md:h-96 " src={fish1} alt="" />
          </div>
          <div className="md:my-auto mx-auto ml-4">
            <ul className='gap-x-3'>
              <li className="flex gap-3 md:flex-col   md:space-y-3">
                {Array(3)
                  .fill("")
                  .map((_, i) => (
                    <a key={i} href="/">
                      <img className="h-10 w-10" src={facebook} alt="" />
                    </a>
                  ))}
              </li>
            </ul>
          </div>
          {/* blog contents */}

        </div>

        <div className="max-w-5xl mx-auto  gap-5 py-10   ">
          <div className="space-y-4   ">
            <div className='flex justify-end flex-col mx-5'>
              <div className='flex flex-col md:flex-row '>
              <p className='md:w-[70%] text-justify font-semibold col-auto'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, magni exercitationem aliquid et recusandae praesentium.
              Molestiae, velit cupiditate dolore similique soluta ea provident
              eius dolor voluptatem tenetur sapiente maiores, officiis fugiat
              nesciunt nostrum laboriosam? Sit itaque nam illum, repellendus
              impedit doloribus enim, ad repudiandae sunt, aliquam aperiam
              repellat veritatis obcaecati. Autem ipsam eos perferendis labore
              porro voluptates tempore eum nesciunt non illum minima laudantium
              facere qui possimus, excepturi
              </p>
              <ol className='md:gap-x-3 py-5 mx-auto '>
                <h3 className='font-bold'>Category</h3>
                <hr />
              <li className="  gap-3  md:space-y-3">
              {'>'} <a href='/' >Fish</a>
              </li>
              <li className=" gap-3  md:space-y-3">
             {'>'} <a href='/' >Fish</a>
              </li>
              <li className=" gap-3 md:space-y-3">
              {'>'} <a href='/' >Fish</a>
                    
              </li>
            </ol>
              </div>
            <p className="text-justify font-semibold col-auto ">
             


             <br />
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti, magni exercitationem aliquid et recusandae praesentium.
             Molestiae, velit cupiditate dolore similique soluta ea provident
             eius dolor voluptatem tenetur sapiente maiores, officiis fugiat
             nesciunt nostrum laboriosam? Sit itaque nam illum, repellendus
             impedit doloribus enim, ad repudiandae sunt, aliquam aperiam
             repellat veritatis obcaecati. Autem ipsam eos perferendis labore
             porro voluptates tempore eum nesciunt non illum minima laudantium
             facere qui possimus, excepturi
                    
             <br />
              <div className='my-6'>
              <img className="rounded mx-auto md:h-80 w-3/4" src={fish1} alt="" />
              </div>

             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Deleniti, magni exercitationem aliquid et recusandae praesentium.
             Molestiae, velit cupiditate dolore similique soluta ea provident
             eius dolor voluptatem tenetur sapiente maiores, officiis fugiat
             nesciunt nostrum laboriosam? Sit itaque nam illum, repellendus
             impedit doloribus enim, ad repudiandae sunt, aliquam aperiam
             repellat veritatis obcaecati. Autem ipsam eos perferendis labore
             porro voluptates tempore eum nesciunt non illum minima laudantium
             facere qui possimus, excepturi
                   
            
           </p>
            </div>
          
            
          </div>
          {/* <div className='grow-0'>
            <ul className='gap-x-3'>
              <li className="flex gap-3 md:flex-col   md:space-y-3">
                {Array(3)
                  .fill("")
                  .map((_, i) => (
                    <a key={i} href="/">
                      <img className="h-10 w-10" src={facebook} alt="" />
                    </a>
                  ))}
              </li>
            </ul>
          </div> */}
        </div>


        {/* All blogs */}
        {/* <div className=" main-container grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-4">
        {Array(8)
          .fill(blogs[0])
          .map((blog, i) => (
            <div
              className="space-y-2 rounded-lg bg-white py-4 px-2 shadow-2xl"
              key={i}
            >
              <img className="rounded" src={dummy} alt="" />
              <p className="text-lg font-semibold">{blog.title}</p>
              <p className="text-xs font-semibold">
                Date : {new Date().toLocaleDateString()} Time :{" "}
                {new Date().toLocaleTimeString()}
              </p>
              <p className="font-semibold">{blog.content}</p>
            </div>
          ))}
      </div> */}
      </section>
    </PageLayout>
  )
}

export default BlogPage