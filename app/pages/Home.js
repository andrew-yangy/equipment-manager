/**
 * Created by Andrew on 2/5/2017.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    TouchableOpacity,
    ListView,
    TouchableWithoutFeedback,
    RefreshControl
} from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchItems } from '../actions/ItemsAction'
import Loading from '../components/Loading'

class Home extends Component {

    constructor(props) {
        super(props);
        this.listview = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchItems());
    }
    onRefresh = () => {
        const {dispatch} = this.props;
        dispatch(fetchItems());
    };
    _renderRow(rowData) {
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {`${rowData.element_id} ${rowData.name}`}
                </Text>
            </View>
        );
    }
    render() {
        const {equipments} = this.props;
        return (
            <View>
                <Header />
                {equipments.loading?<Loading />:
                <ListView
                    enableEmptySections={true}
                    style={{backgroundColor:'white'}}
                    dataSource={this.listview.cloneWithRows(equipments.list)}
                    renderRow={this._renderRow.bind(this)}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                    refreshControl={
                        <RefreshControl
                            refreshing={equipments.loading}
                            onRefresh={this.onRefresh}
                            title="Loading..."
                            titleColor='rgb(25,182,158)'
                        />
                    }
                >
                </ListView>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        height: 130,
    },
    row: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 12,
        fontSize: 16,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
});

function mapStateToProps(state) {
    const { equipments } = state;
    return {
        equipments
    }
}
export default connect(mapStateToProps)(Home);