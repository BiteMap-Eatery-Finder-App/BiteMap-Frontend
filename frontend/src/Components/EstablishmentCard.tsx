import React from 'react'

type Props = {
    Id : number,
    Name: string,
    Description: string,
    Type: number
}

const EstablishmentCard = (props: Props) => {
  return (
    <div className='flex flex-col w-[300px] h-[300px] bg-white rounded-md shadow-md items-center justify-center'>
      <p>Establishment name: {props.Name}</p>
      <p>Description: {props.Description}</p>
      <p>Type: {props.Type}</p>
    </div>
  )
}

export default EstablishmentCard