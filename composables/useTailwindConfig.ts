
export type TailwindConfig = {
    transition: string;
    borderColor: string;
}

export default (): TailwindConfig => {
    return {
        transition: 'transition ease-in-out duration-350',
        borderColor: 'border-white-200 dark:border-gray-700'
    }
}
