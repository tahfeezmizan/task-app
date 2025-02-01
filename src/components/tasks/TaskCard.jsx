import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../redux/feature/tasks/taskSlices';

const TaskCard = ({ data }) => {
  const dispatch = useDispatch();

  let updatedStatus;

  if (data.status === 'pending') {
    updatedStatus = "in-progress"
  } else if (data.status === "in-progress") {
    updatedStatus = "complete"
  } else {
    updatedStatus = "archive"
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${data?.priority === 'high' ? 'text-red-500' : ''
          } ${data?.priority === 'medium' ? 'text-yellow-500' : ''} ${data?.priority === 'low' ? 'text-green-500' : ''
          }`}
      >
        {data?.title}
      </h1>
      <p className="mb-3">{data?.description}</p>
      <p className="text-sm">Assigned to - {data?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{data?.date}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch(removeTask(task.id))} title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>

          <button
            onClick={() => dispatch(updateStatus({ id: data?.id, status: updatedStatus }))}
            title="In progress"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
