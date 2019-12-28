import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default function Users() {
    const repositories = [
        {
            name: 'repo1',
        },
        {
            name: 'repo2',
        },
        {
            name: 'repo3',
        },
        {
            name: 'repo4',
        },
    ];

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#000',
                                        height: '50px',
                                        width: '50px',
                                        borderRadius: '50%',
                                    }}
                                />
                            </div>
                            <h1>Cristiano</h1>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={10}>
                    <Grid container spacing={2}>
                        {repositories.map(repo => (
                            <Grid item key={repo.name} xs={6}>
                                <Card>
                                    <CardContent>
                                        <h1>{repo.name}</h1>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
