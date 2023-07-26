const {Board} = require('../models/Board');

module.exports = {
    getTasks: async (req, res) => {
        try {
            const {boardId} = req.params;
            // const board = await Board.findById(boardId)
            console.log(boardId);
            const board = await Board.findById(boardId);

            if (board) {
                const {tasks} = board;
                return res.json(tasks);
            }
        } catch (error) {
            console.error(error);
            return false;
        }
    },

    // createTask
    createTask: async (req, res) => {
        try {
            const {boardId} = req.params;
            console.log(req.params);

            const task = {
                taskName: req.body.taskName,
                priority: 10,
            };
            const board = await Board.findById(boardId);

            if (!board) {
                res.json('Board not found');
            }

            board.tasks.push(task);
            board.save();

            return res.json(board);
        } catch (error) {
            console.error(error);
        }
    },

    // updateTask

    updateTask: async (req, res) => {
        try {
            const {boardId, taskId} = req.params;
            const {taskName, priority} = req.body;
            // const board = await Board.findById(boardId)
            console.log(boardId);

            const updatedTask = {
                // may need to use spread operator to get all of the task properties
                taskName,
                priority,
            };

            const board = await Board.findById(boardId);
            // const task = await board.tasks.findByIdAndUpdate(taskId, {taskName,priority}, {new: true} )
            // const updatedBoard = await Board.findByIdAndUpdate(
            //   boardId,
            //   { $set: { tasks: { _id: taskId } } }, // used to remove the task from the tasks array based on its _id property
            //   { new: true }
            // )

            if (!board) {
                res.json('Board not found');
            }

            const task = board.tasks.id(taskId);
            task.set(updatedTask);
            await board.save();

            console.log(board);
            return res.json(board);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
    // deleteTask

    deleteTask: async (req, res) => {
        try {
            const {boardId, taskId} = req.params;
            // const updatedBoard = await Board.findByIdAndUpdate(
            //   boardId,
            //   { $pull: { tasks: { _id: taskId } } }, // used to remove the task from the tasks array based on its _id property
            //   { new: true }
            // )
            const board = await Board.findById(boardId);
            board.tasks.id(taskId).deleteOne();
            await board.save();
            console.log(board);
            return res.json(board);
        } catch (error) {
            console.error(error);
            return res.status(500);
        }
    },
};
