import Assignments from './../components/Assignments.js';
import Panel from "./../components/Panel.js"
export default {
    data(){
        return{
            show:true
        }
    },
    components:{
        Assignments,
        Panel
    },
    template:`
    <div class="flex flex-col gap-8">
    <Assignments />
    <Panel>
            <template v-slot:heading>
                hello world !
            </template>
            <template v-slot:default>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit in accusamus quisquam voluptate eos eligendi? Neque qui dolores corrupti odio.
            </template>
        </Panel>    
    </div>
    `
}