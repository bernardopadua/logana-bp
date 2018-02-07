const Objects = {
    new_log: {
        pk: null,
        fields: {
            title: 'Testing React',
            forum_user: 'User Forum',
            url: 'http URL',
            status: 'O',
            forum: 1
        }
    },
    /* This will change in the future */
    /* Status will be a table a part */
    status: [
        {
            key: 0,
            value: 'O',
            text: 'Open'
        },
        {
            key: 1,
            value: 'C',
            text: 'Closed'
        },
        {
            key: 2,
            value: 'W',
            text: 'Waiting for User'
        },
        {
            key: 3,
            value: 'T',
            text: 'Temporary Closed'
        }
    ]
}

export default Objects;