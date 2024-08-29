import {
    Page,
    Badge,
    Card,
    InlineGrid,
    Text,
    Button,
    Layout,
    Box,
    CalloutCard,
    Modal,
} from '@shopify/polaris';
import React, { useState } from "react";

function Gridtest() {

    const [active, setActive] = useState(false);
    const handleChange = () => setActive(!active);

    const Groups = [
        {
            value:'Title1',
            title:'Title1',
            text:'Text1',
            illustration:'https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg',
            primaryAction: 'Read the book' ,
            onDismiss:'dismiss1',
        },
        {
            value:'Title2',
            title:'Title2',
            text:'Text2',
            illustration:'https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg',
            primaryAction: 'Read the book2' ,
            onDismiss:'dismiss2',
        },
        {
            value:'Title3',
            title:'Title3',
            text:'Text3',
            illustration:'https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg',
            primaryAction: 'Read the book3' ,
            onDismiss:'dismiss3',
        },
        
    ]

    const Placeholder = ({ title, text, height = 'auto', width = 'auto', showBorder = false, borderRadius }) => {
        return (
            <div
                style={{
                    background: 'var(--p-color-bg-surface-secondary)',
                    height: height,
                    width: width,
                    borderInlineStart: showBorder
                        ? '1px dashed var(--p-color-bg-surface-tertiary-active)'
                        : 'none',
                    padding: '16px',
                    color: 'var(--p-color-text)',
                    borderRadius: borderRadius,
                }}
            >
                <Text variant="headingMd">{title}</Text>
                <p>{text}</p>
            </div>
        );
    };

    

    return (
        <div style={{ background: 'var(--p-color-bg-surface-secondary-active)' }}>
            <Page
                title="Ohlala Mobile App"
                titleMetadata={<Badge tone="success">Live</Badge>}
                compactTitle

                primaryAction={{
                    content: 'Publish',
                    accessibilityLabel: 'Publish',
                    onAction: handleChange,
                }}
                actionGroups={[
                    {
                        title: 'Share',
                        actions: [{}],
                    },

                    {
                        title: 'More Actions',
                        actions: [
                            {
                                content: 'Go To Shopney Dashboard',
                                accessibilityLabel: 'Go To Shopney Dashboard',
                                onAction: () => alert('Go To Shopney Dashboard'),
                            },
                            {
                                content: 'Profile',
                                accessibilityLabel: 'Profile',
                                onAction: () => alert('Profile'),
                            },
                        ],
                    },

                ]}
            >

                {active && (
                    <Modal
                        open={active}
                        onClose={handleChange}
                        title="Title"
                        primaryAction={{
                            content: "Confirm",
                            onAction: handleChange, 
                        }}
                        secondaryActions={[
                            {
                                content: "Cancel",
                                onAction: handleChange, 
                            },
                        ]}
                    >
                        <Modal.Section>
                            <Text variant="bodyMd">
                                Message
                            </Text>
                        </Modal.Section>
                    </Modal>
                )}


                <InlineGrid columns={3}>
                    <div >
                        <Placeholder
                            title="Orders"
                            text="View your orders summary here."
                            borderRadius="10px 0 0 10px"
                        />
                        <div style={{ marginTop: '8px' }}>
                            <Button variant="primary">
                                New Push
                            </Button>
                        </div>
                    </div>
                    <div >
                        <Placeholder
                            title="Orders"
                            text="View your orders summary here."
                            showBorder
                        />
                        <div style={{ marginTop: '8px' }}>
                            <Button variant="primary">
                                Update Design
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Placeholder
                            title="Orders"
                            text="View your orders summary here."
                            showBorder
                            borderRadius="0 10px 10px 0"
                        />
                        <div style={{ marginTop: '8px' }}>
                            <Button variant="primary" >
                                Reply Chat
                            </Button>
                        </div>
                    </div>
                </InlineGrid>

                <Layout>
                    <Layout.Section>
                        <Box style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Text variant="headingMd" style={{ marginBottom: '200px' }}>
                                Things to do next
                            </Text>
                        </Box>
                        {Groups.map((group, index) => (
                            <CalloutCard
                                key={index}
                                title={group.title}
                                illustration={group.illustration}
                                primaryAction={{ content: group.primaryAction }}
                                onDismiss={() => { alert(group.onDismiss) }}
                            >
                                <p>{group.text}</p>
                            </CalloutCard>
                        ))}
                    </Layout.Section>
                </Layout>
            </Page>
        </div>
    );
}

export default Gridtest;