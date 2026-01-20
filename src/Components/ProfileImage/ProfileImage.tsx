import * as React from "react";

type imageProp = {
    resource: string
}

const ProfileImage: React.FC<imageProp> = ({ resource }) =>{
    return (
        <figure className='h-50 w-50'>
            <img className='h-full w-full rounded-lg object-cover' src={resource} alt='profileImage'/>
        </figure>
    )
}
export default ProfileImage