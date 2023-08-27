import {
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Children, useMemo, useState} from 'react';
import {HiPlusCircle, HiOutlineTrash} from 'react-icons/hi';
import ColumnHeader from './ColumnHeader';
import SortableTask from './SortableTask';
import AddTask from './AddTask';

const ColumnLane = ({column, items, children, draggableProps}) => {
    return (
        <div className='bg-primaryLight w-[300px] max-h-full rounded-md flex flex-col shadow-lg overflow-y-auto '>
            {/* Column title */}

            <ColumnHeader
                column={column}
                items={items}
                draggableProps={draggableProps}
            />

            {/* Container for all sortable tasks*/}
            <ul className='flex flex-col  gap-2 p-2 overflow-x-hidden overflow-y-auto min-h-[100px]'>
                {children}
            </ul>

            <AddTask />
        </div>
    );
};

export default ColumnLane;
