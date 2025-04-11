import React from 'react'

export default function Form() {
    return (
        <>
            <form>
                <div className='flex justify-between items-center gap-4'>
                    <div className='w-full'>
                        <input className="p-3 border rounded-2xl w-full" type="text" placeholder="Agrega tu tarea..." />
                    </div>

                    <div className="">
                        <input className="border rounded-full h-10 w-10  font-semibold text-2xl pb-0.5 " type="submit" value={"+"} />
                    </div>
                </div>
            </form>
        </>
    )
}
