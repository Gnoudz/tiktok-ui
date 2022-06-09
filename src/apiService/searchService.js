import * as request from '~/untils/request';

export const search = async (q, type = 'less') => {
    try {
        const result = await request.get('users/search', {
            params: {
                q,
                type: type,
            },
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
};
