import React, {Component} from 'react';
import {
    withStyles,
    Button,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Icon,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Slide
} from '@material-ui/core';
import {FuseAnimate, FuseAnimateGroup} from '@fuse';
import classNames from 'classnames';
import axios from 'axios';

function Transition(props)
{
    return <Slide direction="up" {...props} />;
}

const styles = theme => ({
    header: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + theme.palette.primary.main + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
});

class KnowledgeBasePage extends Component {

    state = {
        data      : [],
        openDialog: false,
        dialogData: {
            title  : null,
            content: null
        }
    };

    componentDidMount()
    {
        axios.get('/api/knowledge-base').then(res => {
            this.setState({data: res.data});
        });
    }

    handleOpenDialog = (dialogData) => {
        this.setState({
            openDialog: true,
            dialogData
        });
    };

    handleCloseDialog = () => {
        this.setState({
            openDialog: false
        });
    };

    render()
    {
        const {classes} = this.props;
        const {data, openDialog, dialogData} = this.state;

        return (
            <div className="w-full">

                <div className={classNames(classes.header, "flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")}>

                    <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                        <Typography color="inherit" className="text-36 sm:text-56 font-light">
                            How can we help?
                        </Typography>
                    </FuseAnimate>

                    <FuseAnimate duration={400} delay={600}>
                        <Typography variant="subtitle1" color="inherit" className="opacity-75 mt-16 mx-auto max-w-512">
                            Welcome to our knowledge base
                        </Typography>
                    </FuseAnimate>
                </div>

                <div>

                    <FuseAnimateGroup
                        enter={{
                            animation: "transition.slideUpBigIn"
                        }}
                        className="flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"
                    >
                        {data.map((category) => (
                            <div className="w-full max-w-512 pb-24 md:w-1/2 md:p-16" key={category.id}>
                                <Card elevation={1}>
                                    <CardContent>
                                        <Typography className="font-medium px-16 pt-8" color="textSecondary">{category.title}</Typography>
                                        <List component="nav">
                                            {category.featuredArticles.map(article => (
                                                <ListItem key={article.id} button onClick={() => this.handleOpenDialog(article)}>
                                                    <ListItemIcon className="mr-0">
                                                        <Icon>note</Icon>
                                                    </ListItemIcon>
                                                    <ListItemText primary={article.title}/>
                                                </ListItem>
                                            ))}
                                        </List>
                                        <Button className="normal-case w-full justify-start" color="secondary">See all articles ({category.articlesCount})</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </FuseAnimateGroup>
                </div>

                <Dialog
                    open={openDialog}
                    onClose={this.handleCloseDialog}
                    aria-labelledby="knowledge-base-document"
                    TransitionComponent={Transition}
                >
                    <DialogTitle>
                        {dialogData.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText dangerouslySetInnerHTML={{__html: dialogData.content}}>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseDialog} color="primary">
                            CLOSE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(KnowledgeBasePage);
