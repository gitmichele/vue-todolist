function init() {

    new Vue ({

        el: '#app',
        data:{

            'tasks': [],
            'newTask': ''
        },
        methods:{

            getTask: function() {

                this.tasks.push(this.newTask);
                this.newTask = '';
            },
            deleteTask: function(index) {

                this.tasks.splice(index, 1)
            }
        }
    });
};

document.addEventListener('DOMContentLoaded', init);
