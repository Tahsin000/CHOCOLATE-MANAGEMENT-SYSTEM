import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateChocolate = () => {
    
    const LoadedData = useLoaderData();
    const navigate = useNavigate();
    const handleUpdateChocolate = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const country = form.country.value;
        const category = form.category.value;
        const photo = form.photo.value;

        const updateChocolate = {name, country, category, photo};
        console.log(updateChocolate);
        
        fetch(`https://my-app-server-beta.vercel.app/chocolate/${LoadedData._id}`, {
            method: 'PUT',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateChocolate)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.matchedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Chocolate Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                  navigate('/')
            }
        })
    }
    return (
        <div className='max-md:p-5 container mx-auto'>
        <h1 className='font-bold text-2xl rounded-lg my-10 bg-[#995D2F] p-3 text-center text-[#fff]'>Chocolate Management System</h1>
        
        <div className="bg-[#14141409] p-10 rounded-lg">
            <form onSubmit={handleUpdateChocolate} className='form-control'>
                <div className='flex flex-col items-center text-center'>
                    <h1 className='font-bold text-xl'>Update Chocolates</h1>
                    <p className='text-[#14141491]'>Use the below form to create a new product</p>
                </div>
                <div className='my-3'>
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='name' defaultValue={LoadedData.name} placeholder="Enter Chocolate Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className='my-3'>
                    <label className="label">
                        <span className="label-text font-bold">Country</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='country' defaultValue={LoadedData.country} placeholder="Enter Country Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="my-3 ">
                    <label className="label">
                        <span className="label-text font-bold">Category</span>
                    </label>
                    <label className="input-group">
                        <select name='category' className="select select-bordered w-full" defaultValue={LoadedData.category || `Select`}>
                            <option disabled selected>Enter Category Name</option>
                            <option value="Dark Chocolate">Dark Chocolate</option>
                            <option value="Milk Chocolate">Milk Chocolate</option>
                            <option value="White Chocolate">White Chocolate</option>
                            <option value="Vegan Chocolate">Vegan Chocolate</option>
                            <option value="Organic Chocolate">Organic Chocolate</option>
                            <option value="Sugar-Free Chocolate">Sugar-Free Chocolate</option>
                            <option value="Artisan Chocolate">Artisan Chocolate</option>
                            <option value="Premium Chocolate">Premium Chocolate</option>
                            <option value="Flavored Chocolate">Flavored Chocolate</option>
                            <option value="Novelty Chocolate">Novelty Chocolate</option>
                        </select>
                    </label>
                </div>
                <div className='my-3'>
                    <label className="label">
                        <span className="label-text font-bold">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name='photo' defaultValue={LoadedData.photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" className='btn btn-block bg-[#995D2F] hover:bg-[#7c4c27] text-[#fff] font-bold my-5' />
            </form>
        </div>
      </div>
    );
};

export default UpdateChocolate;