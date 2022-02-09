import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    scenarios: {
        scenario_teste_scala_horizontal_k8s: {

            executor: 'per-vu-iterations',
            vus: 1000,
            iterations: 100,
            maxDuration: '3m',

        },

    },
};

export default function () {
    http.get('http://192.168.59.100:30000/');
    
}