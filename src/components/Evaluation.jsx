import React from 'react';

export const ModelEvaluation = () => {
    const performances = [
        {
            model: "Linear Regression",
            training: {
                RMSE: 7.524429177350346,
                MAE: 4.014169492323602,
                R2: 0.7819504873792612
            },
            test: {
                RMSE: 9.787461311754384,
                MAE: 4.4294340273340715,
                R2: 0.38897309706050925
            }
        },
        {
            model: "MultiTaskLassoCV",
            training: {
                RMSE: 18.880166127710265,
                MAE: 6.210124550009507,
                R2: 0.016042302256181345
            },
            test: {
                RMSE: 12.75440740298897,
                MAE: 6.083110989403,
                R2: 0.007193497933396076
            }
        },
        {
            model: "Ridge",
            training: {
                RMSE: 7.5244292021716825,
                MAE: 4.014068696319484,
                R2: 0.7819504851329618
            },
            test: {
                RMSE: 9.787440982997023,
                MAE: 4.42930674243489,
                R2: 0.38897701291956094
            }
        },
        {
            model: "RidgeCV",
            training: {
                RMSE: 7.81040044290351,
                MAE: 4.117494560557872,
                R2: 0.7557382100382233
            },
            test: {
                RMSE: 10.064069772488148,
                MAE: 4.465724762681199,
                R2: 0.3583026378680958
            }
        },
        {
            model: "ElasticNet",
            training: {
                RMSE: 7.547848617881731,
                MAE: 4.020166480183803,
                R2: 0.7798206930881397
            },
            test: {
                RMSE: 9.779005180120244,
                MAE: 4.386285513582902,
                R2: 0.3902657070091277
            }
        },
        {
            model: "ElasticNetCV",
            training: {
                RMSE: 18.880168777421243,
                MAE: 6.210125114637342,
                R2: 0.016042060002765497
            },
            test: {
                RMSE: 12.754408000438465,
                MAE: 6.083111524736793,
                R2: 0.0071934083437506695
            }
        },
        {
            model: "K-Neighbors Regressor",
            training: {
                RMSE: 15.803239404826925,
                MAE: 4.782843137254901,
                R2: 0.3133747475779962
            },
            test: {
                RMSE: 13.394510113343847,
                MAE: 6.215372549019608,
                R2: -0.10011601202855314
            }
        },
        {
            model: "Decision Tree",
            training: {
                RMSE: 6.044503614441234e-18,
                MAE: 5.238184613733888e-19,
                R2: 1.0
            },
            test: {
                RMSE: 23.346305917639306,
                MAE: 6.0696078431372555,
                R2: -1.4699279911547158
            }
        },
        {
            model: "Random Forest",
            training: {
                RMSE: 4.9181672593738,
                MAE: 1.4601073529411763,
                R2: 0.9239013798125689
            },
            test: {
                RMSE: 10.629024900308236,
                MAE: 4.266456862745098,
                R2: 0.3769142682150832
            }
        },
        {
            model: "Xgboost",
            training: {
                RMSE: 0.6448283264660706,
                MAE: 0.39291354828276764,
                R2: 0.9984653556026815
            },
            test: {
                RMSE: 13.054783189451694,
                MAE: 4.799630145611351,
                R2: -0.17568141199620135
            }
        },
        {
            model: "Gradient Boosting",
            training: {
                RMSE: 4.2928551494795615,
                MAE: 2.670655120702854,
                R2: 0.9325306133888023
            },
            test: {
                RMSE: 10.38804814344383,
                MAE: 4.24789211234819,
                R2: 0.3329336693520641
            }
        },
        {
            model: "AdaBoost",
            training: {
                RMSE: 6.578429927361682,
                MAE: 4.199048953994864,
                R2: 0.8567747670430373
            },
            test: {
                RMSE: 10.095873246995044,
                MAE: 4.831185149138197,
                R2: 0.22485680562636726
            }
        },
    ];

    return (
        <div style={{ backgroundColor: 'black', color: 'white', padding: '20px', maxHeight: '80vh', overflowY: 'scroll',marginLeft:"78px"}}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Model Performance Metrics</h1>
            {performances.map((performance, index) => (
                <div key={index} style={{ marginBottom: '20px', padding: '15px', border: '1px solid white', borderRadius: '5px' }}>
                    <h2 style={{ fontSize: '1.5em' }}>{performance.model}</h2>
                    <h3>Model performance for Training set</h3>
                    <p>Root Mean Squared Error: {performance.training.RMSE}</p>
                    <p>Mean Absolute Error: {performance.training.MAE}</p>
                    <p>R2 Score: {performance.training.R2}</p>
                    <h3>Model performance for Test set</h3>
                    <p>Root Mean Squared Error: {performance.test.RMSE}</p>
                    <p>Mean Absolute Error: {performance.test.MAE}</p>
                    <p>R2 Score: {performance.test.R2}</p>
                </div>
                
            ))}
            <div style={{ marginTop: '30px', padding: '15px', border: '1px solid yellow', borderRadius: '5px', backgroundColor: '#333' }}>
                <h3 style={{ color: 'yellow', textAlign: 'center' }}>Conclusion</h3>
                <p style={{ textAlign: 'center' }}>
                    Among all models evaluated, the Ridge regression model has demonstrated the best performance on the training dataset.
                </p>
            </div>
        </div>
    );
};