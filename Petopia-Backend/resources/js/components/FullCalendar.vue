<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reservation Calendar</div>
                   
                    <div class="card-body">

                        <div ref="calendar">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {Calendar} from '@fullcalendar/core';
    import dayGrid from '@fullcalendar/daygrid';
    import interaction from '@fullcalendar/interaction';
    

    export default {
       
      
        methods: {
            formatDate(date) {
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var newDate = year + '-' + month + '-' + day;
                return newDate;
            }
        },
        mounted() {
            let vm = this, calendarEl = vm.$refs.calendar;
            vm.calendar = new Calendar(calendarEl, {
                plugins: [interaction, dayGrid],
                defaultView: 'dayGridMonth',
                editable: true,
                firstDay: 1,
                eventDurationEditable: false,
                selectLongPressDelay: 0,
                events: 'api/reservationcalendar'
            })

            vm.calendar.render();

        }
    }
</script>
