import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    employees: require("@/employees.json"),
    teams: require("@/teams.json"),
    selectedEmployees: [],
    stagedForAction: []
  },
  mutations: {
    setStagedForAction(state, data) {
      state.stagedForAction = data;
    },
    addEmployee(state, data) {
      state.selectedEmployees.push(data);
    },
    removeEmployee(state, data) {
      let index = state.selectedEmployees.findIndex(_ => _.id === data.id);
      state.selectedEmployees.splice(index, 1);
    },

    removeEntryFromEmployees(state, data) {
      let index = state.employees.findIndex(_ => _.id === data.id);
      state.employees.splice(index, 1);
    },
    addEntryToEmployees(state, data) {
      state.employees.push(data);
    },

    addTeam(state, { team_id }) {
      let index = state.teams.findIndex(_ => _.id === team_id);
      state.teams.splice(index, 1, { ...state.teams[index], selected: true });
    },
    removeTeam(state, { team_id }) {
      let index = state.teams.findIndex(_ => _.id === team_id);
      state.teams.splice(index, 1, { ...state.teams[index], selected: false });
    }
  },
  actions: {
    selectEmployee({ commit }, data) {
      commit("removeEntryFromEmployees", data);
      commit("addEmployee", data);
    },
    deselectEmployee({ commit }, data) {
      commit("addEntryToEmployees", data);
      commit("removeEmployee", data);
    },

    selectTeam({ commit, dispatch, state }, { team_id }) {
      commit("addTeam", { team_id });
      let employees = state.employees.filter(_ => _.team_id === team_id);
      employees.forEach(data => dispatch("selectEmployee", data));
    },
    deselectTeam({ commit, dispatch, state }, { team_id }) {
      commit("removeTeam", { team_id });
      let employees = state.selectedEmployees.filter(
        _ => _.team_id === team_id
      );
      employees.forEach(data => dispatch("deselectEmployee", data));
    },

    selectEmployeesFromTeam({ dispatch }, { team_id, selected }) {
      if (selected) {
        dispatch("deselectTeam", { team_id });
      } else {
        dispatch("selectTeam", { team_id });
      }
    },

    persistCellValue({ state }, { id, attr, value }) {
      let rowIdx = state.selectedEmployees.findIndex(_ => _.id === id);
      let rowData = state.selectedEmployees[rowIdx];
      state.selectedEmployees.splice(rowIdx, 1, { ...rowData, [attr]: value });
    },
    persistManyCellsValueAtOnce({ state }, { attr, value }) {
      state.stagedForAction.forEach(id => {
        let rowIdx = state.selectedEmployees.findIndex(_ => _.id === id);
        let rowData = state.selectedEmployees[rowIdx];
        state.selectedEmployees.splice(rowIdx, 1, {
          ...rowData,
          [attr]: value
        });
      });
    }
  },
  modules: {}
});
