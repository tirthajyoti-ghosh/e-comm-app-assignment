import { TextStyle } from 'react-native';
import { moderateScale } from 'app/utils/scale';

type Heading =
    | 'h1_regular_30'
    | 'h1_bold_30'
    | 'h1_semibold_30'
    | 'h1_medium_30'
    | 'h2_regular_26'
    | 'h2_bold_26'
    | 'h2_semibold_26'
    | 'h2_medium_26'
    | 'h3_regular_20'
    | 'h3_bold_20'
    | 'h3_semibold_20'
    | 'h3_medium_20'
    | 'h4_regular_18'
    | 'h4_bold_18'
    | 'h4_semibold_18'
    | 'h4_medium_18';

type Body =
    | 'body1_regular_16'
    | 'body1_semibold_16'
    | 'body1_medium_16'
    | 'body2_regular_14'
    | 'body2_semibold_14'
    | 'body2_medium_14';

type Label = 'label_medium_12' | 'label_regular_12';

type Button = 'button1_14' | 'button2_12';

type HeadingTypography = {
    [key in Heading]: TextStyle;
};

type BodyTypography = {
    [key in Body]: TextStyle;
};

type LabelTypography = {
    [key in Label]: TextStyle;
};

type ButtonTypography = {
    [key in Button]: TextStyle;
};

export const heading: HeadingTypography = {
    h1_regular_30: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(30),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(38),
    },
    h1_bold_30: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(30),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: moderateScale(38),
    },
    h1_semibold_30: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(30),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(38),
    },
    h1_medium_30: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(30),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(38),
    },
    h2_regular_26: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(26),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(34),
    },
    h2_bold_26: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(26),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: moderateScale(34),
    },
    h2_semibold_26: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(26),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(34),
    },
    h2_medium_26: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(26),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(34),
    },
    h3_regular_20: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(20),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(28),
    },
    h3_bold_20: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(20),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: moderateScale(28),
    },
    h3_semibold_20: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(20),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(28),
    },
    h3_medium_20: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(20),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(28),
    },
    h4_regular_18: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(18),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(26),
    },
    h4_bold_18: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(18),
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: moderateScale(26),
    },
    h4_semibold_18: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(18),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(26),
    },
    h4_medium_18: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(18),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(26),
    },
};

export const body: BodyTypography = {
    body1_regular_16: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(16),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(24),
    },
    body1_semibold_16: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(16),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(24),
    },
    body1_medium_16: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(16),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(24),
    },
    body2_regular_14: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(14),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(22),
    },
    body2_semibold_14: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(14),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(22),
    },
    body2_medium_14: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(14),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(22),
    },
};

export const label: LabelTypography = {
    label_medium_12: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(12),
        fontWeight: '500',
        fontStyle: 'normal',
        lineHeight: moderateScale(20),
    },
    label_regular_12: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(12),
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: moderateScale(20),
    },
};

export const button: ButtonTypography = {
    button1_14: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(14),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(22),
    },
    button2_12: {
        fontFamily: 'Manrope',
        fontSize: moderateScale(12),
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: moderateScale(20),
    },
};

// -------------------Text Alignment-------------------

export const alignLeft: TextStyle = {
    textAlign: 'left',
};

export const alignRight: TextStyle = {
    textAlign: 'right',
};

export const alignCenter: TextStyle = {
    textAlign: 'center',
};
