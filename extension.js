const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

function activate(context) {
    let disposable = vscode.commands.registerCommand('spec-kit.createTodoFiles', function () {
        const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
        if (!workspaceFolder) {
            vscode.window.showErrorMessage('No workspace folder found');
            return;
        }

        createSpecKitStructure(workspaceFolder.uri.fsPath);
    });

    context.subscriptions.push(disposable);
}

function createSpecKitStructure(rootPath) {
    const folders = [
        'specs',
        'docs',
        'templates',
        'ai-agents',
        'constitutional-principles',
        'tasks'
    ];

    // Create folder structure
    folders.forEach(folder => {
        const folderPath = path.join(rootPath, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }
    });

    // Create ToDo files
    createTodoFiles(rootPath);
    
    vscode.window.showInformationMessage('Spec Kit ToDo structure created successfully!');
}

function createTodoFiles(rootPath) {
    const todoFiles = {
        'PROJECT-SETUP.md': getProjectSetupTodo(),
        'specs/SPECIFICATIONS.md': getSpecificationsTodo(),
        'docs/DOCUMENTATION.md': getDocumentationTodo(),
        'constitutional-principles/PRINCIPLES.md': getPrinciplesTodo(),
        'ai-agents/AGENT-TASKS.md': getAgentTasksTodo(),
        'tasks/TASK-BREAKDOWN.md': getTaskBreakdownTodo(),
        'templates/TEMPLATE-CHECKLIST.md': getTemplateChecklistTodo()
    };

    Object.entries(todoFiles).forEach(([filePath, content]) => {
        const fullPath = path.join(rootPath, filePath);
        const dir = path.dirname(fullPath);
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        fs.writeFileSync(fullPath, content);
    });
}

// ToDo Templates
function getProjectSetupTodo() {
    return `# Project Setup ToDo

## Initial Setup
- [x] Create project structure
- [ ] Initialize Git repository
- [ ] Set up CLI configuration
- [ ] Configure multi-platform support (PowerShell/Bash)
- [ ] Set up version control integration

## Spec-Driven Development Setup
- [ ] Define project specifications
- [ ] Create constitutional principles
- [ ] Set up AI agent configurations
- [ ] Initialize template system
- [ ] Configure reproducibility settings

## Environment Configuration
- [ ] Set up development environment
- [ ] Configure CI/CD pipeline
- [ ] Set up testing framework
- [ ] Initialize documentation system
- [ ] Configure collaboration tools

## Next Steps
- [ ] Review constitutional principles
- [ ] Begin specification writing
- [ ] Set up first AI agent tasks
`;
}

function getSpecificationsTodo() {
    return `# Specifications ToDo

## Core Specifications
- [ ] Define project requirements
- [ ] Abstract implementation details
- [ ] Create reproducible specifications
- [ ] Document collaboration guidelines
- [ ] Set up specification templates

## Technical Specifications
- [ ] Define API specifications
- [ ] Create data model specifications
- [ ] Document architecture decisions
- [ ] Specify integration requirements
- [ ] Define performance criteria

## Framework Agnostic Specs
- [ ] Create framework-independent specifications
- [ ] Enable multi-tech stack experimentation
- [ ] Document specification abstractions
- [ ] Set up specification validation
- [ ] Create specification versioning

## Collaboration Specs
- [ ] Define team collaboration protocols
- [ ] Create specification review process
- [ ] Set up specification sharing mechanisms
- [ ] Document specification ownership
- [ ] Create specification update procedures
`;
}

function getDocumentationTodo() {
    return `# Documentation ToDo

## Project Documentation
- [ ] Create README.md
- [ ] Write project overview
- [ ] Document installation instructions
- [ ] Create usage examples
- [ ] Set up API documentation

## Specification Documentation
- [ ] Document specification format
- [ ] Create specification examples
- [ ] Write specification best practices
- [ ] Document specification lifecycle
- [ ] Create specification templates

## AI Agent Documentation
- [ ] Document agent capabilities
- [ ] Create agent configuration guides
- [ ] Write agent task examples
- [ ] Document agent integration
- [ ] Create troubleshooting guides

## Process Documentation
- [ ] Document development workflow
- [ ] Create contribution guidelines
- [ ] Write deployment procedures
- [ ] Document testing strategies
- [ ] Create maintenance guides
`;
}

function getPrinciplesTodo() {
    return `# Constitutional Principles ToDo

## Core Principles Definition
- [ ] Define non-negotiable constraints
- [ ] Ensure consistency across implementations
- [ ] Create principle validation rules
- [ ] Document principle rationale
- [ ] Set up principle enforcement

## Technical Principles
- [ ] Define code quality standards
- [ ] Set performance requirements
- [ ] Establish security guidelines
- [ ] Create scalability principles
- [ ] Define maintainability standards

## Collaboration Principles
- [ ] Define team communication standards
- [ ] Set code review requirements
- [ ] Establish documentation standards
- [ ] Create conflict resolution procedures
- [ ] Define decision-making processes

## Compliance Principles
- [ ] Set up automated compliance checking
- [ ] Create principle violation reporting
- [ ] Establish principle update procedures
- [ ] Document principle exceptions
- [ ] Create principle training materials
`;
}

function getAgentTasksTodo() {
    return `# AI Agent Tasks ToDo

## Agent Configuration
- [ ] Set up multiple AI coding agents
- [ ] Configure agent capabilities
- [ ] Define agent responsibilities
- [ ] Create agent communication protocols
- [ ] Set up agent monitoring

## Task Management
- [ ] Break down tasks into manageable chunks
- [ ] Assign tasks to appropriate agents
- [ ] Create task dependencies
- [ ] Set up task progress tracking
- [ ] Define task completion criteria

## Agent Integration
- [ ] Integrate agents with CLI
- [ ] Set up agent collaboration
- [ ] Configure agent handoffs
- [ ] Create agent feedback loops
- [ ] Establish agent quality control

## Agent Optimization
- [ ] Monitor agent performance
- [ ] Optimize agent workflows
- [ ] Update agent configurations
- [ ] Create agent improvement metrics
- [ ] Set up agent learning mechanisms
`;
}

function getTaskBreakdownTodo() {
    return `# Task Breakdown ToDo

## Project Planning
- [ ] Identify major project milestones
- [ ] Break down milestones into tasks
- [ ] Create task dependencies
- [ ] Estimate task complexity
- [ ] Assign task priorities

## Development Tasks
- [ ] Create development task templates
- [ ] Define task acceptance criteria
- [ ] Set up task tracking system
- [ ] Create task review process
- [ ] Establish task completion standards

## AI Agent Task Assignment
- [ ] Match tasks to agent capabilities
- [ ] Create task execution guidelines
- [ ] Set up task monitoring
- [ ] Define task handoff procedures
- [ ] Create task quality metrics

## Progress Tracking
- [ ] Set up structured progress reporting
- [ ] Create task completion dashboards
- [ ] Establish progress review cycles
- [ ] Define progress escalation procedures
- [ ] Create progress communication protocols
`;
}

function getTemplateChecklistTodo() {
    return `# Template Checklist ToDo

## Template Creation
- [ ] Create highly customizable templates
- [ ] Design templates for specific project needs
- [ ] Set up template versioning
- [ ] Create template validation
- [ ] Establish template maintenance

## Markdown Templates
- [ ] Create specification templates
- [ ] Design documentation templates
- [ ] Set up task templates
- [ ] Create report templates
- [ ] Design communication templates

## Customization Framework
- [ ] Enable template adaptation
- [ ] Create customization guidelines
- [ ] Set up template inheritance
- [ ] Design template composition
- [ ] Create template testing framework

## Template Management
- [ ] Set up template repository
- [ ] Create template discovery system
- [ ] Establish template sharing
- [ ] Design template feedback system
- [ ] Create template analytics
`;
}

module.exports = {
    activate,
    deactivate() {}
};
