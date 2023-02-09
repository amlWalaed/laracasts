import AssignmentsList from "./AssignmentsList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import Panel from "./Panel.js"
export default {
  template: `
    <div class="flex gap-4 ">
    <Panel theme="light">
      <AssignmentsList title="in progress"  :assignments="filters.inProgress" >
        <AssignmentCreate @addAssignment="add" />
      </AssignmentsList>
    </Panel>
    <Panel v-if="filters.completed.length && show">
      <AssignmentsList v-show="show" title="completed" :assignments="filters.completed" can-hide @hide="show=false"/>
    </Panel>
    </div>
        
       
    `,
  components: {
    AssignmentsList,
    AssignmentCreate,
    Panel
  },
  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },
  },
  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        id: this.assignments.length + 1,
        completed: false,
      });
    },
  },
  created() {
    fetch("http://localhost:3001/assignments")
      .then((res) => res.json())
      .then((assignments) => (this.assignments = assignments));
  },
  data() {
    return {
      assignments: [],
      show:true
    };
  },
};
