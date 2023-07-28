import Vue from 'vue';
import Vuetify from 'vuetify';
import { VuetifyThemeVariant } from 'vuetify/types/services/theme';

Vue.use(Vuetify);

const customTheme: Partial<VuetifyThemeVariant> = {
	primary: '#4fa928',
	primaryDark: '#326918',
	secondary: '#673ab7',
	accent: '#83db59',
	error: '#D2232A',
	yellow: '#FFCC00',
	brown: '#654321',
};

export default new Vuetify({
	iconfont: 'md',

	options: {
		customProperties: true,
	},
	//Not sure why those overrides were commented out but I am guessing this was the intended approach
	theme: {
		themes: {
			light: customTheme,
		},
	},
});
