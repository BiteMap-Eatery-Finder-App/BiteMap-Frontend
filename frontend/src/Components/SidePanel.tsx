import React from 'react'
import { faBreadSlice, faBurger, faCake, faCalendarCheck, faCocktail, faCoffee, faHome, faHouse, faIceCream, faNewspaper, faStar, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Disclosure } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

type Props = {}

const filters = [
    {
      id: 'establishmentTypes',
      name: 'Establishment types',
      options: [
        { value: 'Coffee&Tea', label: 'Coffee & Tea', checked: false },
        { value: 'Bars&Pubs', label: 'Bars & Pubs', checked: false },
        { value: 'Restaurants', label: 'Restaurants', checked: false },
        { value: 'Dessert', label: 'Dessert', checked: false },
        { value: 'Bakeries', label: 'Bakeries', checked: false },
        { value: 'QuickBites', label: 'Quick Bites', checked: false },
      ],
    },
    {
        id: 'meals',
        name: 'Meals',
        options: [
          { value: 'Breakfast', label: 'Breakfast', checked: false },
          { value: 'Brunch', label: 'Brunch', checked: false },
          { value: 'Lunch', label: 'Lunch', checked: false },
          { value: 'Dinner', label: 'Dinner', checked: false },
        ],
      },
]

const SidePanel = (props: Props) => {
  return (
    <div className='flex h-full w-full bg-darkGray flex-col border-r-[1px] py-4 rounded-md'>
        <div className='flex w-full h-[30px] flex-col px-10 transition-[0.5s] font-mulish font-medium text-lightGray/50 text-[18px] mt-[20px]'>
            <p>General</p>
            <hr className='text-lightGray/50 w-full mt-[5px]'/>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer mt-2'>
            <FontAwesomeIcon icon={faHouse} className='text-[18px]'/>
            <p className='ml-6'>Home</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faStar} className='text-[18px]'/>
            <p className='ml-6'>Reviews</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faCalendarCheck} className='text-[18px]'/>
            <p className='ml-6'>Reservations</p>
        </div>
        <div className='flex w-full h-[50px] flex-row justify-start items-center hover:bg-darkRed hover:text-white px-10
                        transition-[0.5s] font-mulish font-medium text-white text-[20px] cursor-pointer'>
            <FontAwesomeIcon icon={faNewspaper} className='text-[18px]'/>
            <p className='ml-6'>News</p>
        </div>
        

        <div className='flex w-full flex-col px-10 transition-[0.5s] mt-6 font-mulish font-medium text-lightGray/50 text-[18px]'>
            <section aria-labelledby="products-heading">
                <div>
                    <form className="hidden lg:block">
                        {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-b border-lightGray/50 py-6 mb-6">
                            {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                    <Disclosure.Button className="flex w-full items-center justify-between font-mulish font-medium text-lightGray/50 text-[18px]">
                                        <span className="font-mulish font-medium text-lightGray/50">{section.name}</span>
                                        <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusIcon className="h-[17px] w-[17px]" aria-hidden="true" />
                                        ) : (
                                            <PlusIcon className="h-[17px] w-[17px]" aria-hidden="true" />
                                        )}
                                        </span>
                                    </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                    <div className="space-y-4">
                                        {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                />
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 font-mulish font-medium text-white text-[20px] cursor-pointer"
                                                >
                                                {option.label}
                                            </label>
                                        </div>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </form>
                </div>
            </section>
        </div>
    </div>
  )
}

export default SidePanel;