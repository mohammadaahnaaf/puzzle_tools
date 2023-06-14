import { toPng } from "html-to-image"
import { useCallback, useEffect, useRef, useState } from "react"

export function Thermo(show, setImage) {

    let shows = {
        id: 1,
        view: show.show
    }
    // console.log(shows)

    // const [image, setImage] = useState(null)
    const [data, setData] = useState([])
    const ref = useRef();

    const downloadImage = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'Thermometer.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    // view images 
    const viewImage = useCallback(() => {
        let node = document.getElementById('view');

        toPng(node)
            .then(function (dataUrl) {
                // var img = new Image();
                // document.body.appendChild(img);
                var img = document.createElement('img');
                img.src = dataUrl;
                setImage(img.src)
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }, [])

    // create random data 
    useEffect(() => {
        const temps = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100))
        
        const tempss = temps.map((jin, index) => ({
            id: index + 1,
            temp: jin
        }));
        setData(tempss)
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <div ref={ref} id='view' className='grid grid-cols-4 bg-gray-50 gap-4 px-5 py-10'>
                {data.map((item, index) => (
                    <div key={index} className='grid gap-5 items-center'>
                        <div className="relative">
                            <div className="flex items-start justify-center">
                                <div className='grid gap-0.5 pt-3 w-5 justify-items-end'>
                                    {/* 10 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 20 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 30 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 40 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 50 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 60 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 70 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 80 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 90 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    {/* 100 */}
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />

                                </div>

                                <div className="h-48 w-5 grid items-center rotate-180 overflow-hidden rounded-full ring-black ring-1 bg-gray-300">
                                    <div className='h-full pb-3 pt-10'>
                                        <div className="h-full bg-red-600" style={{ "height": `${+item.temp}%` }}></div>
                                    </div>
                                </div>

                                <div className='grid gap-0.5 pt-3'>
                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />

                                    <div className='p-[0.5px] w-5 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-3 bg-black' />
                                    <div className='p-[0.5px] w-5 bg-black' />

                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-end justify-center">
                                <div className="h-[52px] ring-1 ring-red-600 w-[52px] rounded-full bg-red-600"></div>
                            </div>
                        </div>

                        {shows.view ? (
                            <p className='text-center'>({item.id})
                                <span className=' border-b px-1 border-black'>
                                    {' '}{item.temp} °C
                                </span>
                            </p>
                        ) : (
                            <p className='text-center'>({item.id})________</p>
                        )}
                    </div>
                ))}
            </div>
            <button type='button' className='p-2 mr-2 bg-gray-300 mt-4' onClick={viewImage}>View Image</button>
            <button type='button' className='p-2 bg-gray-300 mt-4' onClick={downloadImage}>Download Image</button>
            {/* <div className='h-[50vh] w-full mt-4'>
                {image !== null && (
                    <img src={image} alt='view image' />
                )}
            </div> */}
        </div>
    )
}