import {HiPlusCircle} from 'react-icons/hi';

const AddTask = ({addTask, column, containerId}) => {
    return (
        <button
            className='flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:bg-warningLight'
            onClick={() => {
                addTask(column._id, containerId);
            }}
        >
            <HiPlusCircle className='text-2xl' />
            Add task
        </button>
    );
};

export default AddTask;
