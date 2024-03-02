import { Button, FileInput, Select, TextInput } from 'flowbite-react'
import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreatePost = () => {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
        <h1 className='text-center text-3xl my-7 font-semibold '>Create a Post</h1>
        <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-5 sm:flex-row justify-between'>
                <TextInput type='text ' placeholder='Title' required id='title' className='flex-1'/>
                <Select>
                    <option value='uncategorized'>Select a category</option>
                    <option value="travel">Travel Blog</option>
                    <option value="personal">Personal Blog</option>
                    <option value="food">Food Blog</option>
                    <option value="faishon">Faishon Blog</option>
                </Select>
            </div>
            <div className='flex gap-4 justify-between items-center border-4 border-orange-400 border-dotted p-3'>
                <FileInput type="file" accept='image/*' />
                <Button type='button' class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 hover:text-red-800 dark:text-orange-900 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">Upload Image</Button>
            </div>
            <ReactQuill  required theme="snow" placeholder='Write something' className='h-72 mb-12'/>
            <Button type='submit' class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 hover:text-red-800 dark:text-orange-900 dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 ">Publish</Button>
        </form>
    </div>
  )
}

export default CreatePost
