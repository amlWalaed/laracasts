import AssignmentsItem from "./AssignmentsItem.js"
import AssignmentTags from "./AssignmentTags.js"
export default {
    template: `
        <section v-if="filteredAssignments.length">
        <div class="flex justify-between items-center">
            <h2 class="font-bold py-3 text-center">{{title}}</h2>
            <span v-show="canHide" class="cursor-pointer" @click="$emit('hide')">&times;</span>
        </div>
        <AssignmentTags :initialTags="tags" v-model:currentTag="currentTag"/>
        <ul class="border border-gray-200 divide-y-2 divide-gray mt-5">
        <AssignmentsItem v-for="(assignment , i) in filteredAssignments" :key="Math.floor(Math.random() * 100)" :assignment="assignment"/> 
        </ul>
        <slot></slot>
        </section>
    `,
    props:{
        assignments:Object,
        title:String,
        canHide:{
            type:Boolean,
            default: false, 
        }
    },
    computed:{
        tags(){
            return ['all' , ...new Set(this.assignments.map(assignment => assignment.tag))]
        },
        filteredAssignments(){
            if(this.currentTag !== "all"){
                return this.assignments.filter(assignment => assignment.tag === this.currentTag)
            }else{
                return this.assignments   
            }
        }
    },
    components:{
        AssignmentsItem,
        AssignmentTags
    },
    data(){
        return {
            currentTag:'all'
        }
    }
}