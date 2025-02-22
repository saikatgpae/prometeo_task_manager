'use client';

import { useDispatch, useSelector } from 'react-redux';
import './Tasks.css';
import { useEffect } from 'react';
import AddTasks from '../AddTasks/AddTasks';
import Task from '../Task/Task';
import { fetchTasks } from '../../Redux/Tasks/tasksRedux';

export default function Tasks() {
  // Call the tasks from Redux
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    if (tasks === null) {
      dispatch(fetchTasks());
    }
  }, [dispatch, tasks]);

  return (
    <>
      <AddTasks />
      <Task tasks={tasks} />
    </>
  );
}
